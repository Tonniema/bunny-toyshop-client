//eslint-disable-next-line
import React from 'react';

const Review = () => {
    return (
        <div className='bg-[url("https://png.pngtree.com/background/20210709/original/pngtree-bouquet-rose-roses-flower-background-picture-image_510318.jpg")] bg-cover bg-no-repeat '>
            <div className='  text-center  text-black'>
                <h2 className='text-[1.6em] md:text-3xl font-bold   text-[#d52c81] pt-14 '>What They Say</h2>
                <h3 className='text-lg font-semibold pt-4'>CUSTOMER TESTIMONIALS</h3>
            </div>
            <div className='flex min-h-screen items-center justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72'>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=626&ext=jpg&ga=GA1.2.1436565612.1673088567&semt=sph" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Andrea</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>The customer service at this toyshop is exceptional.They went above and beyond to help me find the perfect toy.</p>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            </div>

                        </div>
                        
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72 '>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Devin</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>The customer service at this toyshop is exceptional.They went above and beyond to help me find the perfect toy.</p>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            </div>

                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72 '>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Sophia</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>The customer service at this toyshop is exceptional.They went above and beyond to help me find the perfect toy.</p>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="fixed bottom-16">
                    <p className='text-2xl font-semibold '></p>
                </div>

            </div>
            
        </div>
    );
};

export default Review;