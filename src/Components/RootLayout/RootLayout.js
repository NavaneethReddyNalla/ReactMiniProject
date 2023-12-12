import React from "react";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div>
      <div id="header">
        <h1>Retail-X Online Store</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
