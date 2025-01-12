import React, { useRef, useEffect, useState } from 'react';
import { Online3DViewer } from 'online-3d-viewer';
// import * as OV from 'online-3d-viewer';
// const Online3DViewer = require('online-3d-viewer').Online3DViewer

const ThreeDViewer = ({ file, url }: { file?: File, url?: string }) => {
  const viewerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (viewerRef.current && (file || url)) {
      const viewer = new Online3DViewer(viewerRef.current, {
        file: file ? URL.createObjectURL(file) : url,
        onLoadComplete: () => setLoading(false),
        onError: (error) => {
          console.error('3D Viewer Error: ', error);
          setLoading(false);
        },
      });
      viewer.render();
    }
  }, [file, url]);

  return (
    <div>
      {loading && <p>正在加载 3D 文件...</p>}
      <div
        ref={viewerRef}
        style={{ width: '100%', height: '500px', backgroundColor: '#e0e0e0' }}
      />
    </div>
  );
};

export default ThreeDViewer;
