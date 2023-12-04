import React from "react";
import SubNav from "../../components/subnav/SubNav";
import { Outlet } from "react-router-dom";
import "./store.css";
const Store = () => {
  return (
    <div id="store">
      <div className="store-nav">
        <SubNav />
      </div>
      <div className="store-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Store;
