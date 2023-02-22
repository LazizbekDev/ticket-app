import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import NewTicket from "./pages/NewTicket";
import PrivateRoute from "./components/PrivateRoute";
import Tickets from "./pages/Tickets";

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
                    <Route path={'/yangi-chipta'} element={<PrivateRoute />}>
                        <Route path={'/yangi-chipta'} element={<NewTicket />}/>
                    </Route>
                    <Route path={'/chiptalarim'} element={<PrivateRoute />}>
                        <Route path={'/chiptalarim'} element={<Tickets />}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
        <ToastContainer />
    </>
  );
}

export default App;
