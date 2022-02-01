import React, {useState, useContext} from 'react';
import GiftList from "./GiftList";
import GiftForm from "./GiftForm";
import Pagination from './Pagination';
import GiftsContext from "./GiftsContext";


const GiftsTable = (props) => {

    const {
        gifts, 
        giftsToShow, 
        setGiftsToShow,
        setGifts,
        currentPage,
        setCurrentPage
    } = useContext(GiftsContext);


    const [isASCTitle, setIsASCTitle] = useState(true);
    const [isASCDatetime, setIsASCDatetime] = useState(true);

    const [giftsPerPage, setGiftsPerPage] = useState(5);

    const lastGiftIndex = currentPage * giftsPerPage;
    const firstGiftIndex = lastGiftIndex - giftsPerPage;
    const currentGifts = giftsToShow.slice(firstGiftIndex, lastGiftIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const previousPage = () => setCurrentPage(prev => prev - 1);

    const createGift = (newGift) => {
        setGiftsToShow([...giftsToShow, newGift]);
        setGifts([...giftsToShow, newGift]);
    }

    const removeGift = (gift) => {
        setGifts(gifts.filter(g => g.id !== gift.id));
        setGiftsToShow(gifts.filter(g => g.id !== gift.id));
    }

    const showPanel = (id, panel) => {
        const gift = giftsToShow.filter((gift) => gift.id === id)

        const obj = {...gift[0]}
        switch (panel) {
            case 'view': {
                obj.delete = false;
                obj.edit = false;
                obj.view = true;
                break;
            }
            case 'edit': {
                obj.edit = true;
                obj.view = false;
                obj.delete = false;
                break;
            }
            case 'delete': {
                obj.view = false;
                obj.edit = false;
                obj.delete = true;
                break;
            }
            default: break;
        }

        setGiftsToShow(prev => {
            const result = prev.map(gift => {
                if (gift.id === obj.id) {
                    return obj
                }
                return gift
            })
            return result
        });
    }

    const removePanel = (id, panel) => {
        const gift = giftsToShow.filter((gift) => gift.id === id)

        const obj = {...gift[0]}
        switch (panel) {
            case 'view': {
                obj.view = false;
                break;
            }
            case 'edit': {
                obj.edit = false;
                break;
            }
            case 'delete': {
                obj.delete = false;
                break;
            }
            default: break;
        }

        setGiftsToShow(prev => {
            const result = prev.map(gift => {
                if (gift.id === obj.id) {
                    return obj
                }
                return gift
            })
            return result
        });
    }

    const sortingByTitle = () => {
        if (isASCTitle) {
            setGiftsToShow([...giftsToShow].sort((a, b) => a.title.localeCompare(b.title)));
            setIsASCTitle(false);
        } else {
            setGiftsToShow([...giftsToShow].sort((a, b) => b.title.localeCompare(a.title)));
            setIsASCTitle(true);
        }
    }

    const sortingByDatetime = () => {
        if (isASCDatetime) {
            setGiftsToShow([...giftsToShow].sort((a, b) => a.datetime.localeCompare(b.datetime)));
            setIsASCDatetime(false);
        } else {
            setGiftsToShow([...giftsToShow].sort( (a,b) => b.datetime.localeCompare(a.datetime)));
            setIsASCDatetime(true);
        }
    }


    return (
        < >
            <div className="gifts__table">
            <GiftForm create={createGift} giftFormVisible={props.giftFormVisible} removeForm={props.removeForm}/>
            {giftsToShow.length
                ?
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th className="table__datetime">
                            Datetime
                            <button className="btn__table__sort" onClick={sortingByDatetime}>&#8645;</button>
                        </th>
                        <th className="table__title">
                            Title
                            <button className="btn__table__sort" onClick={sortingByTitle}>&#8645;</button>
                        </th>
                        <th className="table__tags">Tags</th>
                        <th className="table__description">Description</th>
                        <th className="table__price">Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <GiftList remove={removeGift} gifts={currentGifts} showPanel={showPanel} removePanel={removePanel}
                    />
                    <Pagination 
                        giftsPerPage={giftsPerPage} 
                        totalGifts={giftsToShow.length} 
                        paginate={paginate} 
                        currentPage={currentPage}
                        nextPage={nextPage}
                        previousPage={previousPage}
                        setGiftsPerPage={setGiftsPerPage}
                    />
                </table>
                :
                <div>Gifts not found</div>
            }

            </div>
        </>
        
    );
};

export default GiftsTable;