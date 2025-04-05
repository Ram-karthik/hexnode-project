import React from 'react';
import "../assets/stylesheets/pages/secure.scss";
import { Button } from 'react-bootstrap';

const Secure = () => {
    return (
        <section className='secure-page py-glbl'>
            <div className="container">
                <div className="fs-40 text-center pb-4 secure-title">Get Hexnode UEM and start securing your endpoints</div>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className='btn-red btn-lg secure-btn'>TRY HEXNODE FOR FREE</Button>
                </div>
            </div>
        </section>
    )
}

export default Secure