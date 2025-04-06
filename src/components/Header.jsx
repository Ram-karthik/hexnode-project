import React, { useEffect, useState } from 'react';
import logo from "../assets/images/logo-white.svg";
import logoBlk from "../assets/images/logo-blk.svg";
import "../assets/stylesheets/pages/header.scss";
import { Button } from "react-bootstrap"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`header-page d-flex align-items-center ${scrolled ? 'scrolled' : ''}`}>
            <nav className='container d-flex justify-content-between'>
                <div className='d-flex gap-4 align-items-center'>
                    <img src={logo} alt="logo" className='logo-white' />
                    <img src={logoBlk} alt="logo" className='logo-black' />
                    <div className="nav-links d-flex align-items-center mt-2">
                        <a href="#why">Why Hexnode</a>
                        <a href="#features">Features</a>
                        <a href="#platforms">Platforms</a>
                        <a href="#customers">Customers</a>
                    </div>
                </div>
                <Button className='btn-red btn-md'>14 DAY FREE TRIAL</Button>
            </nav>
        </div>
    )
}

export default Header