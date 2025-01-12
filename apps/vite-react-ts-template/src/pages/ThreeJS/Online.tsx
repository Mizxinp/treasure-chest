import { useEffect, useRef } from "react";
import * as OV from "online-3d-viewer";

interface Online3DViewerProps {
  file?: File;
  url?: string;
}

const Online3DViewer = ({ file, url }: Online3DViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OV.EmbeddedViewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize viewer
    const viewer = new OV.EmbeddedViewer(containerRef.current, {
      backgroundColor: new OV.RGBAColor(36, 36, 36, 255), // Match parent bg color
      defaultColor: new OV.RGBColor(200, 200, 200),
      edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
      onModelLoaded: () => {
        console.log("Model loaded successfully");
      }
    });

    viewerRef.current = viewer;

    // Load model from file
    // viewer.LoadModelFromFileList([file]);
    if (file) {
      viewer.LoadModelFromFileList([file]);
    } else if (url) {
      viewer.LoadModelFromUrlList([url]);
    }

    // Cleanup
    return () => {
      if (viewerRef.current) {
        viewerRef.current.Destroy();
        viewerRef.current = null;
      }
    };
  }, [file, url]);

  // Handle container resize
  useEffect(() => {
    const handleResize = () => {
      if (viewerRef.current) {
        viewerRef.current.Resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Online3DViewer;
