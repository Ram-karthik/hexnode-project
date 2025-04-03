import React from 'react';
import "../assets/stylesheets/pages/top-section.scss";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import topImg from "../assets/images/baner.webp";
import idcImg from "../assets/images/logos/idImg.webp";
import gartImg from "../assets/images/logos/gartner.webp";
import fortImg from "../assets/images/logos/forrester.webp";

const TopSection = () => {
    return (
        <>
            <section className='top-section'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className="top__section--left">
                        <p className='light-txt mb-2'>Unified Endpoint Management</p>
                        <div className="title mb-2">Gain control and visibility over your endpoints</div>
                        <p className='desc-txt'>Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.</p>
                        <div className="d-flex gap-2">
                            <Form>
                                <Form.Group className="mb-3 glbl-input" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Form>
                            <Button className='btn-red btn-lg'>LET'S TRY IT OUT!</Button>
                        </div>
                    </div>
                    <div className="top__section--right">
                        <img src={topImg} alt="" />
                    </div>
                </div>
            </section>
            <div>
                <div className="top__section-bottom">
                    <div className='container d-flex justify-content-between'>
                        <div className='box'>
                            <img src={idcImg} alt="logo" width={83} height={25} />
                            <p className='light-txt mt-3 mb-0'>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                        </div>
                        <div className='brdr-divider'></div>
                        <div className='box'>
                            <img src={gartImg} alt="logo" width={110} height={25} />
                            <p className='light-txt mt-3 mb-0'>Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.</p>
                        </div>
                        <div className='brdr-divider'></div>
                        <div className='box'>
                            <img src={fortImg} alt="logo" width={156} height={25} />
                            <p className='light-txt mt-3 mb-0'>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TopSection