//eslint-disable-next-line
import React from 'react';

const Services = () => {
    return (
        <div>
            <div>
            <h2 className='text-4xl font-extrabold text-center text-[#d52c81] pt-16'>Our Services</h2>
            </div>
           <section className='flex justify-evenly items-center py-9 flex-col md:flex-row'>
                <div className='flex gap-x-3 items-center border-4 border-dashed border-l-transparent border-t-transparent border-b-transparent md:border-r-[#9ec12f] cursor-zoom-in scale-75 hover:scale-125'>
                    <img className='w-[40%]' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-2.png" alt="" />
                    <div>
                        <p>FREE SHIPPING</p> 
                        <p>Don’t worry! The orders always arrive on time.</p>
                    </div>
                </div>
                <div className='flex gap-x-3 items-center border-4 border-dashed border-l-transparent border-t-transparent border-b-transparent md:border-r-[#9ec12f] cursor-zoom-in scale-75 hover:scale-125'>
                    <img className='w-[40%]' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-2.png" alt="" />
                    <div>
                        <p>FREE RETURNS</p> 
                        <p>All returns are subject to verification of original sale.</p>
                    </div>
                </div>
                <div className='flex gap-x-3 items-center cursor-zoom-in scale-75 hover:scale-125'>
                    <img className='w-[40%]' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-2.png" alt="" />
                    <div>
                        <p>GIFT CARDS</p> 
                        <p>The perfect gift for everyone, it is a gift card.</p>
                    </div>
                </div>
           
            </section> 
        </div>
    );
};

export default Services;