import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

export const CreatePost = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    try {
      fetch('https://dummyjson.com/posts/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, userId: '3' }),
      })
          .then((response) =>
          {
            response.json()
            if (response.status >= 200 && response.status < 300) {
              navigate("/posts");
            }
          })
          .then((data) =>
          {
            setTitle("");
            setBody("");
          })

    } catch (err) {
      console.log("error: ", err);
    }
  };


  return (
    <div>
      <h2>Create Post</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="body">body:</label>
          <textarea id="body" value={body} onChange={handleBodyChange}/>
        </div>
        <button type="submit">CREATE</button>
      </form>
    </div>
  )
}
