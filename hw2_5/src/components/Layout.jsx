import React from 'react'
import './Layout.css'
import {NavLink, Outlet} from "react-router-dom";

const activemenuClass = ({isActive}) => isActive ? "active-menu" : "";

 const Layout = () => {
  return (
    <>
      <nav>
        <ul className="headerLinks">
          <li><NavLink to={'/'} className={activemenuClass}>Home</NavLink></li>
          <li><NavLink to={'/posts'} className={activemenuClass}>Posts</NavLink></li>
          <li><NavLink to={'/create'} className={activemenuClass}>Create post</NavLink></li>
          <li><NavLink to={'/login'} className={activemenuClass}>Login</NavLink></li>
        </ul>
      </nav>
      <div className="container">
        <Outlet/>
      </div>
      <footer>Home work 2</footer>
    </>
  )
}
export default Layout
