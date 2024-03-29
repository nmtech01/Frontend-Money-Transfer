import React from "react";

const FullScreenLoader = () => {
  return (
    <div
      style={{
        zIndex: 999,
        background: "rgba(0,0,0, 0.3)",
        position: "absolute",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%",
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
