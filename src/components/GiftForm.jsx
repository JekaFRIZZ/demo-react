import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { Formik } from 'formik';
import * as yup from 'yup';
import Tags from './Tags';

const GiftForm = ({create, giftFormVisible, removeForm}) => {

    const [tags, setTags] = useState([]);
     
    const date = new Date();
    const finalDate = `${date.getFullYear()}-${date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : `${date.getUTCMonth() + 1}`}-${date.getUTCDate()} ${date.toString().split(' ')[4]}`
    const [gift, setGift] = useState({
        title: '',
        duration: '',
        price: 0,
        tags: '',
        description: ''
    });

    const addNewGift = (e) => {
        e.preventDefault();
        const newGift = {
            ...gift,
            tags: tags.join(' '),
            id: Date.now(),
            datetime: finalDate
        }
        create(newGift);
        setGift({
            title: '',
            duration: '',
            price: 0,
            tags: '',
            description: ''
        });
        setTags([]);
        removeForm();
    }

    const validationSchema = yup.object().shape({
        title: yup.string().min(6).max(30).required(),
        description: yup.string().min(12).max(1000).required(),
        price: yup.number().typeError('price must be a number').min(0).required(),
        duration: yup.number().typeError('duration must be a number').min(1).required(),
        tags: yup.string().matches(/^(\S+$)/, { message: 'whitespaces are not allow' }).min(3).max(15)
    })

    const addTag = (str) => {
        if (!str) return;
        setTags(prev => {
            const newState = [...prev];
            newState.push(str);
            return newState;
        })
    }

    return (
      <>
        <Formik 
          initialValues={{
            title: '',
            description: '',
            duration: '',
            price: 0,
            tags: ''
          }}
          validateOnBlur
          validationSchema={validationSchema}
          isInitialValid={false}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, resetForm }) => (
            <form className={giftFormVisible ? "add__new__gift" : "add__new__gift none"}>
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
                                value={values.title}
                                onChange={e => {
                                    handleChange(e)
                                    setGift({ ...gift, title: e.target.value })
                                }}
                                type="text"
                                name="title"
                                onBlur={handleBlur}
                            />
                            { touched.title && errors.title && <p className='error'>{errors.title}</p> }
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Description
                        </div>
                        <div>
                            <textarea
                                value={values.description}
                                onChange={e => {
                                    handleChange(e)
                                    setGift({ ...gift, description: e.target.value })
                                }}
                                name="description"
                                id="description"
                                cols="34"
                                rows="3"
                                onBlur={handleBlur}>
                            </textarea>
                            { touched.description && errors.description && <p className='error'>{errors.description}</p> }
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Duration
                        </div>
                        <div>
                            <MyInput
                                value={values.duration}
                                onChange={e => {
                                    handleChange(e)
                                    setGift({ ...gift, duration: e.target.value })
                                }}
                                type="text"
                                name="duration"
                                onBlur={handleBlur}  
                            />
                            { touched.duration && errors.duration && <p className='error'>{errors.duration}</p> }
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Price
                        </div>
                        <div>
                            <MyInput
                                value={values.price}
                                onChange={e => {
                                    handleChange(e)
                                    setGift({ ...gift, price: e.target.value })
                                }}
                                type="text"
                                name="price"
                                onBlur={handleBlur} 
                            />
                            { touched.price && errors.price && <p className='error'>{errors.price}</p> }
                        </div>
                    </div>
                    <div className="gift__content">
                        <div>
                            Tags
                        </div>
                        <div className="add__new__gift__tags">
                            <div>
                                <MyInput
                                    value={values.tags}                                    
                                    onChange={e => {
                                        handleChange(e)
                                        setGift({ ...gift, tags: e.target.value })
                                    }}
                                    type="text"
                                    name="tags"
                                    onBlur={handleBlur} 
                                />
                                { touched.tags && errors.tags && <p className='error'>{errors.tags}</p> }
                            </div>
                            <div>
                                <MyButton
                                    disabled={values.tags.includes(' ')} 
                                    onClick={(e) => {
                                    e.preventDefault();
                                    addTag(values.tags);
                                }}>
                                    Add
                                </MyButton>
                            </div>
                        </div>

                    </div>
                </div>
                <Tags tags={tags} setTags={setTags} />

                <div className="add__new__gift__buttons">
                    <MyButton 
                        disabled={!isValid}
                        onClick={(e) => {
                            e.preventDefault();
                            addNewGift(e);
                            removeForm();
                            resetForm();
                        }} 
                        type="submit"
                        >Save</MyButton>
                    <MyButton onClick={(e) => {
                        e.preventDefault();
                        removeForm();
                        resetForm();
                        setTags([]);
                    } }>Cancel</MyButton>
                </div>
            </div>
        </form>
          )}
        </Formik>
        
      </>
  );
};

export default GiftForm;