// 단축키 : rafce
import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = props => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img className='nav__logo' src="/images/netflix-logo.png" alt="Netflix Logo" />

            <img className='nav__avatar' src="/images/netflix-profile.jpg" alt="Netflix profile" />
        </div>
    )
}

export default Nav
