import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'
import axios from 'axios'

function CreatePost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            userId: 17, 
            title: title,
            body: body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log(response.data);
            alert('Success!!!!!!!!!!!!!!!!!!!!')
        })
        .catch(error=> {
            console.log(error)
            alert('error: ' + error )
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <div>
                <label>title:</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} required type="text" placeholder='title'/>
            </div>
            <div>
                <label>body:</label>
                <input value={body} onChange={e=>setBody(e.target.value)} required type="text" placeholder='body'/>
            </div>
            <button>Add</button>
        </form>
    </div>
  )
}

export default CreatePost