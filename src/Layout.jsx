import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Nav from "./Nav";

const Layout = () => {
    return (
        <section className="exploreLayout">
        <Nav />
        <div className="exploreLayout--children">
            <Outlet/>
        </div>
        </section>
    );
};

export default Layout;
