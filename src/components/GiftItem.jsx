import React from 'react';
import MyButton from "./UI/button/MyButton";
import GiftFormDelete from "./GiftFormDelete";
import GiftView from "./GiftView";
import GiftFormEdit from "./GiftFormEdit";

const GiftItem = (props) => {
    return (
        <tr>
            <td className="table__datetime">{props.item.datetime}</td>
            <td className="table__title">{props.item.title}</td>
            <td className="table__tags">{props.item.tags}</td>
            <td className="table__description">{props.item.description}</td>
            <td className="table__price">{props.item.price}</td>
            <td>
                <div className="table__button__container">
                    <div>
                        <button className="gift__item__btn__view" onClick={() => props.showPanel(props.item.id, 'view')}>View</button>
                        <GiftView gifts={props.item} giftViewVisible={props.giftViewVisible} removePanel={props.removePanel}
                                  index={props.number - 1}
                        />
                    </div>
                    <div>
                        <button onClick={() => props.showPanel(props.item.id, 'edit')}>Edit</button>
                        <GiftFormEdit gifts={props.item} giftEditVisible={props.giftEditVisible} removePanel={props.removePanel}
                                      index={props.number - 1}
                        />
                    </div>
                    <div>
                        <MyButton onClick={() => props.showPanel(props.item.id, 'delete')}>
                            Delete
                        </MyButton>
                        <GiftFormDelete gifts={props.item} giftDeleteVisble={props.giftDeleteVisble} removePanel={props.removePanel}
                                        index={props.number - 1} remove={props.remove} item={props.item} />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default GiftItem;