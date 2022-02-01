import React, {useState, useContext} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import GiftsContext from "./GiftsContext";
import Tags from './Tags';
import { Formik } from 'formik';
import * as yup from 'yup';


const GiftFormEdit = (props) => {

    const [title, setTitle] = useState(props.gifts.title);
    const [description, setDescription] = useState(props.gifts.description);
    const [duration, setDuration] = useState(props.gifts.duration);
    const [price, setPrice] = useState(props.gifts.price);
    const [tags, setTags] = useState(props.gifts.tags.split(' '));

    const [tagInput, setTagInput] = useState('');

    const { setGifts, setGiftsToShow } = useContext(GiftsContext);

    const addTag = (str) => {
        if (!str) return;
        setTags(prev => {
            const newState = [...prev];
            newState.push(str);
            return newState;
        })
    }

    const editGift = (e) => {
        e.preventDefault();
        const newGift = {
            title,
            description,
            duration,
            price,
            tags: tags.join(' ')
        }

        setGifts((prev) => {
            const prevGift = prev.filter((gift) => gift.id === props.gifts.id);
            const index = prev.indexOf(prevGift[0]);
            prev[index] = {...prevGift[0], ...newGift}
            return prev;
        });

        setGiftsToShow((prev) => {
            const prevGift = prev.filter((gift) => gift.id === props.gifts.id);
            const index = prev.indexOf(prevGift[0]);
            prev[index] = {...prevGift[0], ...newGift}
            return prev;
        })
        
        props.removePanel(props.gifts.id, 'edit');
    }

    const validationSchema = yup.object().shape({
        title: yup.string().min(6).max(30).required(),
        description: yup.string().min(12).max(1000).required(),
        price: yup.number().typeError('price must be a number').min(0).required(),
        duration: yup.number().typeError('duration must be a number').min(1).required()
    })

    return (
        <Formik 
          initialValues={{
            title,
            description,
            duration,
            price,
          }}
          validateOnBlur
          validationSchema={validationSchema}
          isInitialValid={true}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, resetForm }) => (
                <form className={props.giftEditVisible ? "gift__form__edit__container" : "none"}>
                <div className="gift__edit__header">
                    Edit certificate
                </div>
                <div className="gift__edit__content">
                    <div className="gift__content__edit">
                        <div>
                            Title
                        </div>
                        <div>
                            <MyInput
                                value={values.title}
                                onChange={e => {
                                    handleChange(e)
                                    setTitle(e.target.value)
                                }}
                                type="text"
                                name="title"

                                onBlur={handleBlur} 
                                />
                                { touched.title && errors.title && <p className='error'>{errors.title}</p> }
                        </div>
                    </div>
                    <div className="gift__content__edit">
                        <div>
                            Description
                        </div>
                        <div>
                            <textarea
                                value={values.description}
                                name="description"
                                id="description"
                                onChange={e => {
                                    handleChange(e)
                                    setDescription(e.target.value)
                                }}
                                cols="34"
                                rows="3"
                                onBlur={handleBlur}>

                            </textarea>
                            { touched.description && errors.description && <p className='error'>{errors.description}</p> }
                        </div>
                    </div>
                    <div className="gift__content__edit">
                        <div>
                            Duration
                        </div>
                        <div>
                            <input 
                                type="text"
                                name="duration" 
                                value={values.duration} 
                                onChange={e => {
                                    handleChange(e)
                                    setDuration(e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            { touched.duration && errors.duration && <p className='error'>{errors.duration}</p> }
                        </div>
                    </div>
                    <div className="gift__content__edit">
                        <div>
                            Price
                        </div>
                        <div>
                            <MyInput 
                                type="text"
                                name="price" 
                                value={values.price} 
                                onChange={e => {
                                    handleChange(e)
                                    setPrice(e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            { touched.price && errors.price && <p className='error'>{errors.price}</p> }
                        </div>
                    </div>
                    <div className="gift__content__edit">
                        <div>
                            Tags
                        </div>
                        <div className="add__new__gift__tags">
                                <MyInput 
                                    type="text"
                                    value={tagInput} 
                                    onChange={e => setTagInput(e.target.value)}
                                />
                                <MyButton
                                        disabled={tagInput.includes(' ')} 
                                        onClick={(e) => {
                                        e.preventDefault();
                                        addTag(tagInput);
                                    }}>
                                        Add
                                    </MyButton>
                        </div>
                    </div>
                </div>
                <Tags tags={tags} setTags={setTags} />
    
                <div className="gift__edit__btns">
                    <div>
                        <MyButton 
                            disabled={!isValid}
                            onClick={(e) => {
                            e.preventDefault()
                            editGift(e)
                        }}>Edit</MyButton>
                    </div>
                    <div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            props.removePanel(props.gifts.id, 'edit')
                        }} >Cancel</button>
                    </div>
                </div>
            </form>
            )}
        </Formik>
        
    );
};

export default GiftFormEdit;