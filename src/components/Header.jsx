import React from 'react';
import logo from "../assets/images/logo-white.svg";
import "../assets/stylesheets/pages/header.scss";
import { Button } from "react-bootstrap"

const Header = () => {
    return (
        <div className="header-page d-flex align-items-center">
            <nav className='container d-flex justify-content-between'>
                <div className='d-flex gap-4 align-items-center'>
                    <img src={logo} alt="logo" />
                    <div className="nav-links d-flex align-items-center mt-2">
                        <a href="#">Why Hexnode</a>
                        <a href="">Features</a>
                        <a href="">Platforms</a>
                        <a href="">Customers</a>
                    </div>
                </div>
                <Button className='btn-red btn-md'>14 DAY FREE TRIAL</Button>
            </nav>
        </div>
    )
}

export default Header