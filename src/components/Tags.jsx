import React from "react";

const Tag = ({ title, setTags, index }) => <li className="tag-item">
  <p className="tag-title">{title}</p>
  <button className="delete-tag"
    onClick={(e) => {
      e.preventDefault()
      setTags((prev) => {
        const newArr = [...prev];
        const result = newArr.filter((tag, i) => i !== index);
        return result; 
      })
    }}
  >&times;</button>
</li>

const Tags = ({ tags, setTags }) => {

  return (
    <ul className="tag-list"> 
      {tags.map((tag, index) => <Tag title={tag} setTags={setTags} index={index} />)}
    </ul>
  )
}

export default Tags;
