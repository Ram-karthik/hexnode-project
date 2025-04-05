import React from 'react';
import "../assets/stylesheets/pages/features.scss";
import linImg1 from "../assets/images/features/img1.svg"
import linImg2 from "../assets/images/features/img2.svg"
import linImg3 from "../assets/images/features/img3.svg"
import linImg4 from "../assets/images/features/img4.svg"
import icon1 from "../assets/images/logos/img1.svg";
import icon2 from "../assets/images/logos/img2.svg";
import icon3 from "../assets/images/logos/img3.svg";
import icon4 from "../assets/images/logos/img4.svg";
import logo from "../assets/images/hex-icon.svg";


const Features = () => {
    return (
        <section className='features-page py-glbl'>
            <div className='container'>
                <div>
                    <div className='feature-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <img src={linImg1} alt="" className='icon icon-1' />
                    <img src={linImg2} alt="" className='icon icon-2' />
                    <img src={linImg3} alt="" className='icon icon-3' />
                    <img src={linImg4} alt="" className='icon icon-4' />
                </div>
                <div className="fs-40 text-center mb-5">Why Hexnode?</div>
                {/* <div className="d-flex flex-column gap-5"> */}
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="feature-box">
                        <div className="d-flex gap-3 align-items-center">
                            <img src={icon1} alt="" />
                            <h4>Adapt to the new normal</h4>
                        </div>
                        <p className='mt-2'>
                            Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.
                        </p>
                        <div className='text-danger fw-semibold end-txt'>Try Hexnode on your endpoints</div>
                    </div>
                    <div className="feature-box">
                        <div className="d-flex gap-3 align-items-center">
                            <img src={icon2} alt="" />
                            <h4>Adapt to the new normal</h4>
                        </div>
                        <p className='mt-2'>
                            Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.
                        </p>
                        <div className='text-danger fw-semibold end-txt'>Try Hexnode on your endpoints</div>
                    </div>
                    <div className="feature-box">
                        <div className="d-flex gap-3 align-items-center">
                            <img src={icon3} alt="" />
                            <h4>Get more done with automation</h4>
                        </div>
                        <p className='mt-2'>
                            Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.
                        </p>
                        <div className='text-danger fw-semibold end-txt'>Try Hexnode on your endpoints</div>
                    </div>
                    <div className="feature-box">
                        <div className="d-flex gap-3 align-items-center">
                            <img src={icon4} alt="" />
                            <h4>Unified Policy Management</h4>
                        </div>
                        <p className='mt-2'>
                            Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode.
                        </p>
                        <div className='text-danger fw-semibold end-txt'>Try Hexnode on your endpoints</div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Features