import React from "react";
import "../styles/Layout.css";
import Nav from "./Nav";
import Store from "../pages/Store";

const Layout = () => {

    return (
        <section className="exploreLayout">
            <Nav />
            <div className="exploreLayout--children">
                <Store/>
            </div>
        </section>
    );
};

export default Layout;
