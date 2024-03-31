import React from "react";

const FullScreenLoader = () => {
  return (
    <div
      style={{
        zIndex: 999,
        background: "rgba(0,0,0, 0.3)",
        position: "fixed", // Change position to fixed
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set height to 100vh (viewport height)
        width: "100%", // Set width to 100%
      }}
    >
      <span
        className="spinner-border inner-spinner spinner-border-sm"
        style={{ color: "#ffc107", width: "2.5rem", height: "2.5rem" }}
      ></span>
    </div>
  );
};

export default FullScreenLoader;
