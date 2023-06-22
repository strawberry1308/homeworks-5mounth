import React, {useEffect, useState} from 'react'
import axios from "axios";
import {NavLink, Link} from "react-router-dom";
import Pagination from "../components/Pagination.jsx";

const PostList = () => {

  const [posts, setPost] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
        .then(resp => setPost(resp.data.posts))
  }, [])
  useEffect(() => {
    setPageCount(Math.ceil(posts.length / 10))
  }, [posts])
  const handleChangePage = (e) => {
    setPage(e)
    setOffset((e - 1) * 10)
  }
  const pageLabelBuilder = () => <span>{`${page} / ${pageCount}`}</span>

  return (
    <div>PostList
    <ul className="posts">
      {posts && posts.slice(offset, offset + 10).map((p) => (
          <li key={p.id}>
            <button id="delete"><NavLink state={p} to={`/posts/${p.id}/delete`}>Delete</NavLink></button>
            <button id="edit"><NavLink state={p} to={`/posts/${p.id}/edit`}>Edit</NavLink></button>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
      ))}
    </ul>
    <Pagination
        handleChangePage={(e) => handleChangePage(e)}
        page={page}
        count={pageCount}
        pageLabelBuilder={pageLabelBuilder}
    />
    </div>
  )
}

export default PostList
