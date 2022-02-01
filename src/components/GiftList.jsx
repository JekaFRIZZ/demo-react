import React from 'react';
import GiftItem from "./GiftItem";

const GiftList = (props) => {



    return (
        <tbody>
        {props.gifts.map((gift, index) =>
            <GiftItem remove={props.remove} number={index + 1} item={gift} key={gift.id}
                      showPanel={props.showPanel}
                      giftViewVisible={gift.view}
                      giftEditVisible={gift.edit}
                      giftDeleteVisble={gift.delete}
                      removePanel={props.removePanel} />
        )}
        </tbody>
    );
};

export default GiftList;