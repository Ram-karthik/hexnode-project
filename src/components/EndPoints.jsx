import React from 'react';
import "../assets/stylesheets/pages/endpoints.scss";
import endImg1 from "../assets/images/device-img/zero-touch.webp";
import endImg2 from "../assets/images/device-img/automation.webp";
import endImg3 from "../assets/images/device-img/remote-access.webp";
import endImg4 from "../assets/images/device-img/endpoint-security.webp";
import endImg5 from "../assets/images/device-img/integrations.webp";
import endImg6 from "../assets/images/device-img/app-management.webp";


const EndPoints = () => {
    return (
        <div className='endpoint-page py-glbl' id='features'>
            <div className="container">
                <div className="fs-40 text-center end-title">Powerful endpoint management, built for the devices you choose</div>
                <div className="endpoint__box--wrp d-grid">
                    <div className="endpoint-box">
                        <img src={endImg1} alt="" />
                        <h2 className='box-title'>Zero-touch Enrollment</h2>
                        <p>Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.</p>
                    </div>
                    <div className="endpoint-box">
                        <img src={endImg2} alt="" />
                        <h2 className='box-title'>Automation</h2>
                        <p>Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                    </div>
                    <div className="endpoint-box">
                        <img src={endImg3} alt="" />
                        <h2 className='box-title'>Remote Access Management</h2>
                        <p>Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.</p>
                    </div>
                    <div className="endpoint-box">
                        <img src={endImg4} alt="" />
                        <h2 className='box-title'>Endpoint Security and Compliance</h2>
                        <p>Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</p>
                    </div>
                    <div className="endpoint-box">
                        <img src={endImg5} alt="" />
                        <h2 className='box-title'>Integrations</h2>
                        <p>Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.</p>
                    </div>
                    <div className="endpoint-box">
                        <img src={endImg6} alt="" />
                        <h2 className='box-title'>App Management</h2>
                        <p>Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndPoints