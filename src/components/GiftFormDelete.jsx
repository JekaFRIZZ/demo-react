import React from 'react';

const GiftFormDelete = (props) => {
    return (
        <form className={props.giftDeleteVisble ? "gift__form__delete" : "none"}>
            <div className="delete__gift__header">
                Delete confirmation
            </div>
            <div className="delete__gift__info">
                Do you really want to delete certificate with title = '{props.gifts.title}'?
            </div>
            <div className="delete__gift__btns">
                <div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        props.remove(props.item)
                    }}>Delete</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        props.removePanel(props.gifts.id, 'delete')
                    }}>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default GiftFormDelete;