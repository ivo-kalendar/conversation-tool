import './navbar.css'
import tool from '../../assets/tool.svg'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaArchive, FaBook, FaClipboard, FaCommentAlt } from 'react-icons/fa';

export default function Navbar() {
    const [ hideNavBar, setHideNavbar ] = useState(false)
    let position = 0

    const scrollDown = () => {
        if (position < window.innerHeight / 4) return
        if (hideNavBar) return
        if (!(window.pageYOffset > position)) return
        setHideNavbar(true)
    }

    const scrollUp = () => {
        if (!hideNavBar) return
        if (!(window.pageYOffset < position)) return
        setHideNavbar(false)
    }

    const handleScroll = (e) => {
        if (Math.floor(window.pageYOffset) % 5 != 0) return
        scrollDown()
        scrollUp()
        position = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll)

    return (
        <div className={`navbar ${hideNavBar && 'navbar-scroll-down'}`}>
            <NavLink id='1' to='/'>
                <FaHome size={40} />
            </NavLink>

            <NavLink id='2' to='/'>
                <FaArchive size={40} />
            </NavLink>

            <NavLink id='3' to='/'>
                <FaBook size={40} />
            </NavLink>

            <NavLink id='4' to='/'>
                <FaClipboard size={40} />
            </NavLink>

            <NavLink id='5' to='/'>
                <FaCommentAlt size={40} />
            </NavLink>
        </div>
    )
}
  