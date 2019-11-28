import React from "react";

function Spinner() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        src={"https://i.ytimg.com/vi/otHnRgZUs2I/maxresdefault.jpg"}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
