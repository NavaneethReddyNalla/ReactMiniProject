import React from "react";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div>
      <div
        id="header"
        className="text-center text-white bg-primary bg-gradient"
      >
        <h1>Retail-X Online Store</h1>
      </div>
      <div className="container-fluid p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
