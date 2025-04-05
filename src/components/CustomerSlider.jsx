import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../assets/images/customer-img/person-1.webp";
import person2 from "../assets/images/customer-img/person-2.webp";
import person3 from "../assets/images/customer-img/person-3.webp";
import "../assets/stylesheets/pages/customer.scss";

import img1 from "../assets/images/customer-img/gorillas.svg";
import img2 from "../assets/images/customer-img/hilton.svg";
import img3 from "../assets/images/customer-img/lowes.svg";
import img4 from "../assets/images/customer-img/marriott-intl.svg";
import img5 from "../assets/images/customer-img/polaris.svg";
import img6 from "../assets/images/customer-img/saic.svg";



const CustomerSlider = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <div className="slider-container m-auto">
            <Slider {...settings}>
                <div className='customer-box d-flex'>
                    <div>
                        <img src={person1} alt="" />
                    </div>
                    <div className="customer-right d-flex flex-column justify-content-between">
                        <div className="inner-top text-left">
                            <h4> "Hexnode is of great value. Works great with Android and iOS!"</h4>
                        </div>
                        <div className="inner-bottom d-flex flex-column justify-content-center">
                            <p className='name mb-0'>Justin Modrak</p>
                            <div>
                                <p className='desc-txt mb-0'>Technology Coordinator</p>
                                <p className='desc-txt mb-0'>East Troy Community School District</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='customer-box d-flex'>
                    <div>
                        <img src={person2} alt="" />
                    </div>
                    <div className="customer-right d-flex flex-column justify-content-between">
                        <div className="inner-top text-left">
                            <h4> "Most complete MDM solution I found, and I tested many of them, including major names"</h4>
                        </div>
                        <div className="inner-bottom d-flex flex-column justify-content-center">
                            <p className='name mb-0'>Dalibor Kruljac</p>
                            <div>
                                <p className='desc-txt mb-0'>KAMELEYA LTD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='customer-box d-flex'>
                    <div>
                        <img src={person3} alt="" />
                    </div>
                    <div className="customer-right d-flex flex-column justify-content-between">
                        <div className="inner-top text-left">
                            <h4>"It seemed to be in-line with everything we were looking at."</h4>
                        </div>
                        <div className="inner-bottom d-flex flex-column justify-content-center">
                            <p className='name mb-0'>Chris Robinson</p>
                            <div>
                                <p className='desc-txt mb-0'>Executive Account Manager, NCS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <Slider {...settings1} className='logo-slider mt-5'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div><div>
                    <img src={img3} alt="" />
                </div><div>
                    <img src={img4} alt="" />
                </div><div>
                    <img src={img5} alt="" />
                </div><div>
                    <img src={img6} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default CustomerSlider;
