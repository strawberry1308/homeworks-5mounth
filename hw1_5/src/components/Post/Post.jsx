import React from 'react';

function Post({data}){
    return (
        <div>
            <span>{data.userId}</span>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export default Post;