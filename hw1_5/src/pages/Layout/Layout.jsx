import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.wrapper}>
            <nav>
                <NavLink to={'/'}>Main</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/create'}>CreatePost</NavLink>
            </nav>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;