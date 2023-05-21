//eslint-disable-next-line
import React from 'react';
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

import 'aos/dist/aos.css'; // You can also use <link> for styles

const Gallery = () => {
  return (
    <div>
      <div className='py-8 bg-[url("https://c8.alamy.com/comp/2H11JEP/abstract-neutral-background-white-geometric-mosaic-smooth-triangular-wallpaper-minimal-website-backdrop-elegant-light-template-vector-2H11JEP.jpg")]'>
        <h2 className='text-center font-bold text-3xl text-[#d52c81] drop-shadow-2xl shadow-pink-400'>GALLERY SLIDER</h2>
      </div>
      <div data-aos="fade-right" className='relative'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative h-[95vh] w-full">
          <img  src='https://www.kidkraft.com/media/lookbook/5f96f688f0486.jpg' className="w-[100%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide2" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative h-[95vh] w-full">
          <img src='https://www.parents.com/thmb/gG8dbCAKPRqOz_enl7DdYaneqf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-896888432-2000-bbbbce86b729420abbf3ae55d2e93334.jpg' className="w-[100%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide3" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative h-[95vh] w-full">
          <img src='https://www.gannett-cdn.com/presto/2020/11/28/USAT/b3753571-48dd-40e7-96f7-026e12e305f3-Disney-dolls-2.jpg' className="w-[100%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide4" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative h-[95vh] w-full">
          <img src='https://live.staticflickr.com/5558/14952132568_4b06027f19_b.jpg' className="w-[100%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide5" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative h-[95vh] w-full">
          <img src='https://hip2save.com/wp-content/uploads/2020/11/Disney-Princess-Castle.jpg?fit=1200%2C630&strip=all' className="w-[100%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide6" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative h-[95vh] w-full">
          <img src='https://www.bigw.com.au/medias/sys_master/images/images/h00/hf7/33841673961502.jpg' className="w-[80%] rounded-lg" />
          <div className="z-10 absolute flex justify-end gap-x-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn bg-orange-500 btn-circle">⇦</a>
            <a href="#slide1" className="btn bg-fuchsia-500 btn-circle">⇨</a>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Gallery;
