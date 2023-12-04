import React from "react";
import "./layout.css";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-navbar">
          <NavBar />
        </div>
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
