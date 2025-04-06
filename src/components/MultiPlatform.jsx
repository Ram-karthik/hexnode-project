import React, { useState } from 'react';
import "../assets/stylesheets/pages/platform.scss";
import android from "../assets/images/platform-images/platform1.webp";
import iOS from "../assets/images/platform-images/platform2.webp";
import macOs from "../assets/images/platform-images/platform3.webp";
import Windows from "../assets/images/platform-images/platform4.webp";
import tvOS from "../assets/images/platform-images/platform5.webp";
import FireOS from "../assets/images/platform-images/platform6.webp";

const MultiPlatform = () => {
    const [selectedDevice, setSelectedDevice] = useState('Android');
    const [image, setImage] = useState(android);

    const handleImageClick = (deviceName) => {
        setSelectedDevice(deviceName);
        switch (deviceName) {
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
    };

    return (
        <div className='multiplatform-page py-glbl' id='platforms'>
            <div className="container">
                <div className="fs-40 text-center pb-3">Multi-platform Endpoint Management</div>
                <p className="sub-title text-center">Devices of varying platforms? Hexnode thrives in a diverse environment.</p>
                <div className="pt-5 switch-anim d-flex gap-5">
                    <div className="switch__anim--left">
                        <img src={image} alt={selectedDevice} />
                    </div>
                    <div className="switch__anim--right w-100">
                        {['Android', 'iOS', 'macOs', 'Windows', 'tvOS', 'FireOS'].map(device => (
                            <div key={device} className={`device-name ${selectedDevice === device ? 'selected' : ''}`}>
                                <div
                                    className="device-name-text"
                                    onClick={() => handleImageClick(device)}
                                >
                                    {device}
                                </div>

                                {selectedDevice === device && (
                                    <div className="multi-open">
                                        <div className="title">{device}</div>
                                        <p className="mt-2">
                                            {device === 'Android' && 'Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.'}
                                            {device === 'iOS' && 'Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.'}
                                            {device === 'macOs' && 'Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.'}
                                            {device === 'Windows' && 'Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.'}
                                            {device === 'tvOS' && 'Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.'}
                                            {device === 'FireOS' && 'Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.'}
                                        </p>
                                        <div className="end-txt text-danger fw-semibold">Try Hexnode on your endpoints</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultiPlatform;
