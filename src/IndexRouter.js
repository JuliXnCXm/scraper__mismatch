import React from "react";
import {  Route, Navigate, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Larebaja from "./pages/Larebaja";
import Carulla from "./pages/Carulla";
import Hipermar from "./pages/Hipermar";
import Olimpica from "./pages/Olimpica";
import Farmatodo from "./pages/Farmatodo";
import Layout from "./Layout";


const IndexRouter = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path="/" element={<Navigate to="/larebaja" />} />
            <Route path="stores" element={<Layout/>}>
                <Route index element={<Larebaja />} />
                <Route path="carulla" element={<Carulla />} />
                <Route path="olimpica" element={<Olimpica />} />
                <Route path="farmatodo" element={<Farmatodo />} />
                <Route path="hipermar" element={<Hipermar />} />
            </Route>
        </Routes>
        </AnimatePresence>
    );
};

export default IndexRouter;
