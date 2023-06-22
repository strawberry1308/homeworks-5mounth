import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

export const DeletePost = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.state)
    const handleDelete = () =>
    {
      axios.delete(`https://dummyjson.com/posts/${location.state.id}`)
    .then(resp =>
    {
      console.log(resp)
      if (resp.status >= 200 && resp.status <= 300) {
        alert('жакшы иш кылыптырсын');
        navigate('/posts')
      }
    })
    }

  return (
    <div>
      <h2>точнову? удалить пост :</h2>
      <p>{location.state.title}</p>
      <button onClick={() => navigate(-1)}>жок, артка кайталы</button>
      <button onClick={handleDelete}>ооба</button>
    </div>
  )
}
