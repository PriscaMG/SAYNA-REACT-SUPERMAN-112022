
import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Eshop from "../pages/Eshop";
import MonCompte from "../pages/MonCompte";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
   <>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="eshop" element={<Eshop/>}/>
            <Route path="compte" element={<MonCompte/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
         </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
