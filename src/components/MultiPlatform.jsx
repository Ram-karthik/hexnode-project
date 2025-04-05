import React, { useState } from 'react';
import "../assets/stylesheets/pages/platform.scss";
import android from "../assets/images/platform-images/platform1.webp";
import iOS from "../assets/images/platform-images/platform2.webp";
import macOs from "../assets/images/platform-images/platform3.webp";
import Windows from "../assets/images/platform-images/platform4.webp";
import tvOS from "../assets/images/platform-images/platform5.webp";
import FireOS from "../assets/images/platform-images/platform6.webp";


const MultiPlatform = () => {
    const [image, setImage] = useState(android);
    const handleImageClick = (name) => {
        switch (name) {
            case 'Android':
                setImage(android);
                break;
            case 'iOS':
                setImage(iOS);
                break;
            case 'macOs':
                setImage(macOs);
                break;
            case 'Windows':
                setImage(Windows);
                break;
            case 'tvOS':
                setImage(tvOS);
                break;
            case 'FireOS':
                setImage(FireOS);
                break;
            default:
                setImage(android);
        }
    }
    return (
        <div className='multiplatform-page py-glbl'>
            <div className="container">
                <div className="fs-40 text-center pb-3">Multi-platform Endpoint Management</div>
                <p className="sub-title text-center">Devices of varying platforms? Hexnode thrives in a diverse environment.</p>
                <div className="pt-5 switch-anim d-flex gap-5">
                    <div className="switch__anim--left">
                        <img src={image} alt="" />
                    </div>
                    <div className="switch__anim--right w-100">
                        <div className="device-name" onClick={() => handleImageClick('Android')}>Android</div>
                        <div className="device-name" onClick={() => handleImageClick('iOS')}>iOS</div>
                        <div className="device-name" onClick={() => handleImageClick('macOs')}>macOs</div>
                        <div className="device-name" onClick={() => handleImageClick('Windows')}>Windows</div>
                        <div className="device-name" onClick={() => handleImageClick('tvOS')}>tvOS</div>
                        <div className="device-name" onClick={() => handleImageClick('FireOS')}>FireOS</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultiPlatform;


