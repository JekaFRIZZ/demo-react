import React from 'react';
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GiftsPage from "./GiftsPage";

const LoginPage = () => {
    return (
        <div className="App">
            <Header/>
            <Login/>
            <Footer/>
        </div>
    );
};

export default LoginPage;