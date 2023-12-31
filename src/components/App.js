import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home.js";
import Eshop from "../pages/Eshop.js";
/*import MonCompte from "../pages/MonCompte.js";*/
import NotFound from "../pages/NotFound";
import Signup from "../pages/SignUp.js";
import Login from "../pages/Login.js";
import Cart from "../pages/Cart";
import { AuthContextProvider } from "../context/AuthContext";
/*import ProtectedRoutes from "./ProtectedRoutes";*/
import { ForgotPassword } from "../pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
       <AuthContextProvider>
           <Routes>
             <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="eshop" element={<Eshop />} />
                <Route path="eshop/cart" element={<Cart />} />
                {/*<Route path="Login" element={
                   <ProtectedRoutes route="compte">
                      <MonCompte />
                   </ProtectedRoutes>} />*/}
                <Route path="Signup" element={<Signup />} />
                <Route path="Login" element={<Login />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
                <Route path="*" element={<NotFound />} />
             </Route>
          </Routes>
       </AuthContextProvider>
    </BrowserRouter>
  );
              }

export default App;