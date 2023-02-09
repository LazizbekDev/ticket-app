import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <>
        <BrowserRouter>
            <div className={'container'}>
                <Header />
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/sign-in'} element={<Login />}/>
                    <Route path={'/sign-up'} element={<Login register={true} />}/>
                </Routes>
            </div>
        </BrowserRouter>
        <ToastContainer />
    </>
  );
}

export default App;
