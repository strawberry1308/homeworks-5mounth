import React, {useState} from 'react'
import {useNavigate, useLocation} from "react-router-dom";

export const EditPost = () => {
  const location = useLocation()
  const [input, setInput] = useState(location.state.title)
  const nav = useNavigate()

    const handleSubmit = () =>
    {
        if (input.trim() !=='' && input !== location.state.title) {
            try {
                fetch(`https://dummyjson.com/posts/${location.state.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({title : input.trim()}),
                })
                    .then((response) => {
                        response.json()
                        if (response.status >= 200 && response.status < 300) {
                            console.log(response)
                            setInput('')
                            alert('успешно крч')
                            nav("/posts");
                        }

                    })
            } catch (err) {
                console.log("error: ", err);
            }
        }
        else {
            alert("нормально жаз дейм")
        }

    }


  return (
    <div>
      <h3>надеюсь чтото нормальное придумаешь</h3>
      <p>{location.state.title}</p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => nav(-1)}>назад</button>
      <button onClick={handleSubmit}>я придумал(-а)</button>
    </div>
  )
}
