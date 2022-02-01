import React, {useRef, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const AddNewGift = () => {

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');


    const addNewGift = (e) => {
        e.preventDefault();
        const newGift = {
            title,
            duration
        }
    }

    return (
        <form className="add__new__gift">
            <div className="add__new__gift__container">
                <div className="add__new__gift__header">
                    <h4>Add new certificate</h4>
                </div>
                <div className="add__new__gift__content">
                    <div className="gift__content">
                        <div>
                            Title
                        </div>
                        <div>
                            <MyInput
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type="text"/>
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Description
                        </div>
                        <div>
                            <textarea name="description" id="description" cols="34" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Duration
                        </div>
                        <div>
                            <MyInput
                                value={duration}
                                onChange={e => setDuration(e.target.value)}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Price
                        </div>
                        <div>
                            <MyInput type="text"/>
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Tags
                        </div>
                        <div className="add__new__gift__tags">
                            <div className="add__new__gift__tags__input">
                                <MyInput type="text"/>
                            </div>
                            <div className="add__new__gift__tags__button">
                                <MyButton>Add</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add__new__gift__buttons">
                    <MyButton onClick={addNewGift}>Save</MyButton>
                    <MyButton>Cancel</MyButton>
                </div>
            </div>
        </form>
    );
};

export default AddNewGift;