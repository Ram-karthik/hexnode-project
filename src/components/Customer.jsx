import React from 'react'
import CustomerSlider from './CustomerSlider'
const Customer = () => {
    return (
        <div className='customer-page py-glbl' id='customers'>
            <div className="container">
                <div className="fs-40 text-center pb-5">What our customers say</div>
                <CustomerSlider />
            </div>
        </div>
    )
}

export default Customer