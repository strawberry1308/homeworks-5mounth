import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from '../../components/Post/Post';

function Posts()
{
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() =>
    {
        setLoading(true);
        const gets = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response)
            {
                setPosts(response.data)
                return response.data;
            })
            .catch(function (error)
            {
                console.error(error);
            })
            .finally(function ()
            {
                setLoading(false);
            })
    }, [])
    console.log(posts);
    return (
        <div>
            <h2>Посты</h2>
            {
                loading ? <p>loading...</p> :
                    <div>
                        {
                            posts.slice(0, 40).map(el => <Post key={el.id} data={el} />)
                        }
                    </div>
            }
        </div>
    )
}

export default Posts