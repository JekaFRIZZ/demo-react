import React from 'react';
import MyButton from "./UI/button/MyButton";

const GiftView = (props) => {
    return (
        <div className={props.giftViewVisible ? "gift__view__container" : "none"}>
            <div className="gift__view__header">
                <h4>View certificate</h4>
            </div>
            <div className="gift__view__content">
                <div className="gift__content__view">
                    <div>
                        Title
                    </div>
                    <div>
                        {props.gifts.title}
                    </div>
                </div>
                <div className="gift__content__view">
                    <div>
                        Description
                    </div>
                    <div>
                        {props.gifts.description}
                    </div>
                </div>
                <div className="gift__content__view">
                    <div>
                        Duration
                    </div>
                    <div>
                        {props.gifts.duration}
                    </div>
                </div>
                <div className="gift__content__view">
                    <div>
                        Price
                    </div>
                    <div>
                        {props.gifts.price}
                    </div>
                </div>
                <div className="gift__content__view">
                    <div>
                        Tags
                    </div>
                    <div className="gift__view__tags">
                        {props.gifts.tags}
                    </div>
                </div>
            </div>
            <div className="gift__view__button">
                <MyButton onClick={() => props.removePanel(props.gifts.id, 'view')}>Cancel</MyButton>
            </div>
        </div>
    );
};

export default GiftView;