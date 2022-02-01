import logo from './logo.svg';
import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import GiftsTable from "./components/GiftsTable";
import Search from "./components/Search";
import AddNewGift from "./components/AddNewGift";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GiftsPage from "./pages/GiftsPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route exact path='/certificates' element={<GiftsPage/>}/>
        </Routes>
    );
}

export default App;
