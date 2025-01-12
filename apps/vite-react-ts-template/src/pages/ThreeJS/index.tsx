// src/components/ThreeDViewer.jsx
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import * as THREE from "three";
// import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
// import { OBJLoader } from "three-stdlib/loaders/OBJLoader";
// import { FBXLoader } from "three-stdlib/loaders/FBXLoader";
// import { STLLoader } from "three-stdlib/loaders/STLLoader";
// import { ColladaLoader } from "three-stdlib/loaders/ColladaLoader";
// import { PLYLoader } from "three-stdlib/loaders/PLYLoader";
// import { TDSLoader } from "three-stdlib/loaders/TDSLoader";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { TDSLoader } from "three/examples/jsm/loaders/TDSLoader.js";
import Online3DViewer from "./Online3DViewer";
import Online from "./Online";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}

const Model = ({ file, fileType }) => {
  const [model, setModel] = useState();
  const { camera, scene } = useThree();
  const modelRef = useRef<any>();

  useEffect(() => {
    if (!file || !fileType) {
      console.warn("No file or fileType provided.");
      return;
    }

    console.log(`开始加载文件: ${file.name}, 类型: ${fileType}`);

    let loader;
    const url = URL.createObjectURL(file);
    console.log(`Object URL: ${url}`);

    switch (fileType.toLowerCase()) {
      case "gltf":
      case "glb":
        loader = new GLTFLoader();
        loader.load(
          url,
          (gltf) => {
            console.log("GLTF 模型加载成功");
            setModel(gltf.scene);
          },
          undefined,
          (error) => {
            console.error("GLTF 模型加载失败:", error);
          }
        );
        break;
      case "obj":
        loader = new OBJLoader();
        loader.load(
          url,
          (obj) => {
            console.log("OBJ 模型加载成功");
            setModel(obj);
          },
          undefined,
          (error) => {
            console.error("OBJ 模型加载失败:", error);
          }
        );
        break;
      case "fbx":
        loader = new FBXLoader();
        loader.load(
          url,
          (fbx) => {
            console.log("FBX 模型加载成功");
            setModel(fbx);
          },
          undefined,
          (error) => {
            console.error("FBX 模型加载失败:", error);
          }
        );
        break;
      case "stl":
        loader = new STLLoader();
        loader.load(
          url,
          (geometry) => {
            console.log("STL 模型加载成功");
            const material = new THREE.MeshStandardMaterial({
              color: 0x606060,
            });
            const mesh = new THREE.Mesh(geometry, material);
            setModel(mesh);
          },
          undefined,
          (error) => {
            console.error("STL 模型加载失败:", error);
          }
        );
        break;
      case "dae":
        loader = new ColladaLoader();
        loader.load(
          url,
          (collada) => {
            console.log("DAE 模型加载成功");
            setModel(collada.scene);
          },
          undefined,
          (error) => {
            console.error("DAE 模型加载失败:", error);
          }
        );
        break;
      case "ply":
        loader = new PLYLoader();
        loader.load(
          url,
          (geometry) => {
            console.log("PLY 模型加载成功");
            geometry.computeVertexNormals();
            const material = new THREE.MeshStandardMaterial({
              color: 0x0055ff,
            });
            const mesh = new THREE.Mesh(geometry, material);
            setModel(mesh);
          },
          undefined,
          (error) => {
            console.error("PLY 模型加载失败:", error);
          }
        );
        break;
      case "3ds":
        loader = new TDSLoader();
        loader.load(
          url,
          (object) => {
            console.log("3DS 模型加载成功");
            setModel(object);
          },
          undefined,
          (error) => {
            console.error("3DS 模型加载失败:", error);
          }
        );
        break;
      default:
        console.error("不支持的文件类型:", fileType);
    }

    // 清理对象URL
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file, fileType]);

  useEffect(() => {
    if (model) {
      // 计算模型的边界框
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      // 将模型居中
      model.position.x += model.position.x - center.x;
      model.position.y += model.position.y - center.y;
      model.position.z += model.position.z - center.z;

      // 计算适合的相机距离
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      cameraZ *= 1.5; // 为模型留出一些空间

      camera.position.set(0, 0, cameraZ);
      camera.lookAt(center);

      // 更新相机的投影矩阵
      camera.updateProjectionMatrix();

      // 使OrbitControls重新计算边界
      if (modelRef.current) {
        modelRef.current.updateMatrixWorld();
      }
    }
  }, [model, camera]);

  if (!model) {
    return null;
  }

  return <primitive object={model} ref={modelRef} />;
};

const ThreeDViewer = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [fileFromRemote, setFileFromRemote] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const type = selectedFile.name.split(".").pop().toLowerCase();
      setFile(selectedFile);
      setFileType(type);
      console.log(`选中的文件: ${selectedFile.name}, 类型: ${type}`);
    }
  };

  useEffect(() => {
    fetch("https://static-common.tezign.com/temp/deer.3ds")
      .then((response) => response.blob())
      .then((blob) => {
        setFileFromRemote(new File([blob], "deer.3ds", { type: "model/3ds" }));
      });
  }, []);

  const render3DWidthTh = () => {
    return (
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model file={file} fileType={fileType} />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          rotateSpeed={0.5} // 调整旋转速度
          zoomSpeed={0.5} // 调整缩放速度
          panSpeed={0.5} // 调整平移速度
          minDistance={1} // 最小距离
          maxDistance={100} // 最大距离
          minPolarAngle={0} // 最小俯仰角
          maxPolarAngle={Math.PI / 2} // 最大俯仰角，防止相机穿透模型
        />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[5]} />
      </Canvas>
    );
  };

  console.log(fileFromRemote);

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#242424" }}>
      <input
        type="file"
        accept=".obj,.ply,.3ds,.gltf,.glb,.fbx,.stl,.dae"
        onChange={handleFileChange}
        style={{
          position: "absolute",
          zIndex: 1,
          margin: "10px",
          color: "#fff",
          backgroundColor: "#fff",
          padding: "5px",
          borderRadius: "4px",
        }}
      />
      <Online url="https://static-common.tezign.com/temp/deer.3ds" />
      {/* {fileFromRemote && <Online file={fileFromRemote as any} />} */}

      {/* <Online url="https://musedam-assets-cdn.musetransfer.com/161985765b6a2ef9601035be9b061412.3ds?Expires=1736783999&OSSAccessKeyId=LTAI5tDubGKMRMroG8MuTLZo&Signature=%2FoS8yNGu4NFhOBpLyZiNpsgFuzQ%3D&response-content-disposition=attachment%3B%20filename%3D%22deer.3ds%22%3B%20filename%2A%3Dutf-8%27%27deer.3ds&response-content-type=application%2Foctet-stream"  /> */}
      {/* {file && fileType ? (
        <Online file={file} />

      ) : (
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "20px",
            position: "absolute",
            width: "100%",
          }}
        >
          请选择一个3D文件进行渲染
        </div>
      )} */}
    </div>
  );
};

export default ThreeDViewer;
