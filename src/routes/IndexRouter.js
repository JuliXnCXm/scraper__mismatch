import React from "react";
import {  Route, Navigate, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

const IndexRouter = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path="/" element={<Navigate to="/stores" />} />
            <Route path="*" element={<Layout/>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default IndexRouter;
