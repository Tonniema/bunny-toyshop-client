//eslint-disable-next-line
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 110, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Title from '../../../Hooks/Title';

const View_Details = () => {
    const View_Toy_Details = useLoaderData()
    //eslint-disable-next-line
    const { _id, name, photo, price, seller_same, update_description, update_quantity, update_rating, update_seller_email } = View_Toy_Details
    console.log(View_Toy_Details);

    Title('View Details')

    return (
        <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='md:bg-transparent bg-white my-4'>
            <div className=' w-[98%] md:w-[50%] mx-auto rounded-md my-3 border-2 border-gray-100 shadow-2xl  shadow-pink-300 px-4'>
                <div className='flex py-6 gap-x-5 flex-col md:flex-row items-center justify-evenly'>
                    <div><img className='w-[600px]  ' src={photo} alt="Drone" /></div>
                    <div className=' leading-8'>
                        <p className='text-[2em] italic font-bold'>{name}</p>
                        <p className='font-bold'>{seller_same}</p>
                        <p className=''>{update_seller_email}</p>
                        <p className=''>Price: ${price}</p>
                        <p className=''>Rating: {update_rating} ✹</p>
                        <p className=''>{update_quantity} Pcs Available</p>
                        <p className=''>{update_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default View_Details;
// 
// 