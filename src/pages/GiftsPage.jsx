import {React, useState} from 'react';
import GiftsTable from "../components/GiftsTable";
import Search from "../components/Search";
import Footer from "../components/Footer";
import HeaderGifts from "../components/HeaderGifts";
import giftsArr from '../gifts';
import GiftsContext from "../components/GiftsContext";


const GiftsPage = () => {
    const [giftFormVisible, setGiftFormVisible] = useState(false);
    const [gifts, setGifts] = useState(giftsArr);
    const [giftsToShow, setGiftsToShow] = useState(gifts);
    const [currentPage, setCurrentPage] = useState(1);

    const showForm = () => {
        setGiftFormVisible(true);
    }

    const removeForm = () => {
        setGiftFormVisible(false);
    }

    return (
        <GiftsContext.Provider 
            value={{gifts, setGifts, giftsToShow, setGiftsToShow, 
            currentPage, setCurrentPage}}
            >
            <div>
                <HeaderGifts showForm={showForm} />
                <Search />
                <GiftsTable giftFormVisible={giftFormVisible} removeForm={removeForm} />
                <Footer/>
            </div>
        </GiftsContext.Provider>
        
    );
};

export default GiftsPage;