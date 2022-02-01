import React, {useState, useContext} from 'react';
import MyInput from "./UI/input/MyInput";
import GiftsContext from "./GiftsContext";
import _ from 'lodash';


const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const { gifts, setGiftsToShow, setCurrentPage } = useContext(GiftsContext);

    const search = (str) => {
        const initialArr = str.toLowerCase().split(' ');
        const titles = [];
        const sharpTags = initialArr.filter(item => {
            if (item.includes('#')) {
                return true;
            }
            titles.push(item);
        });
        const tags = sharpTags.map(tag => tag.slice(1))

        const searchedByTag = gifts.filter((gift) => _.intersection(gift.tags.split(' '), tags).length === tags.length ? true : false)

        let result;

        if (tags.length === 0) {
            result = gifts.filter(gift => gift.title.toLowerCase().includes(titles.join(' ')));
        } else {
            result = searchedByTag.filter(gift => gift.title.toLowerCase().includes(titles.join(' ')));
        }

        if (result.length === 0) {
            setGiftsToShow(gifts);
        }
        setCurrentPage(1);
        setGiftsToShow(result);
    }

    return (
        <div className="search__container">
            <div className="input__search">
                <MyInput
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }}
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <div className="button__search">
                <button onClick={() => search(searchQuery)}>Go!</button>
            </div>
        </div>
    );
};

export default Search;