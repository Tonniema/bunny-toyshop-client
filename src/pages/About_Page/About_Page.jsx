//eslint-disable-next-line
import React from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
AOS.init();
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

const About_Page = () => {
    return (
        <div>
            <div>
                <div className='py-8 bg-[url("https://c8.alamy.com/comp/2H11JEP/abstract-neutral-background-white-geometric-mosaic-smooth-triangular-wallpaper-minimal-website-backdrop-elegant-light-template-vector-2H11JEP.jpg")]'>
                    <h2 className='text-3xl text-center py-6 text-[#d52c81]'>WELCOME TO OUR BUNNY TOYSTORE</h2>
                </div>
                <div data-aos="fade-right" className='relative'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://www.kidkraft.com/media/lookbook/5f96f688f0486.jpg' className="w-[100%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide6" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide2" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://www.parents.com/thmb/gG8dbCAKPRqOz_enl7DdYaneqf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-896888432-2000-bbbbce86b729420abbf3ae55d2e93334.jpg' className="w-[100%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide1" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide3" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://www.gannett-cdn.com/presto/2020/11/28/USAT/b3753571-48dd-40e7-96f7-026e12e305f3-Disney-dolls-2.jpg' className="w-[100%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide2" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide4" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://live.staticflickr.com/5558/14952132568_4b06027f19_b.jpg' className="w-[100%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide3" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide5" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://hip2save.com/wp-content/uploads/2020/11/Disney-Princess-Castle.jpg?fit=1200%2C630&strip=all' className="w-[100%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide4" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide6" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative h-[95vh] w-full">
                            <img src='https://www.bigw.com.au/medias/sys_master/images/images/h00/hf7/33841673961502.jpg' className="w-[80%] rounded-lg" />
                            <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide5" className="btn bg-[#d52c81] btn-circle">⇦</a>
                                <a href="#slide1" className="btn bg-[#d52c81] btn-circle">⇨</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  text-center  text-black'>
                <h2 className='text-[1.6em] md:text-3xl font-bold   text-[#d52c81] pt-14 '>Expart Team</h2>
                <h3 className='text-lg font-semibold pt-4'>Meet Out Team</h3>
            </div>
            <div className='flex min-h-screen items-center justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72'>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Lemina Ben</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Chairmen</p>
                        </div>
                        
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72 '>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Mr. Peter Pan</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Manager</p>
                            

                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                        <div className='h-96 w-72 '>
                            <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-238.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt=""  />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h2 className='text-3xl font-semibold text-white' >Ms. Sophia</h2>
                            <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Developer</p>
                            

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

export default About_Page;