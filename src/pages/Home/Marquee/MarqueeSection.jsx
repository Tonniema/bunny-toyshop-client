//eslint-disable-next-line
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
  return (
    <div className='bg-[url("https://c8.alamy.com/comp/2H11JEP/abstract-neutral-background-white-geometric-mosaic-smooth-triangular-wallpaper-minimal-website-backdrop-elegant-light-template-vector-2H11JEP.jpg")]'>
            <div className='text-center '>
                
                <h1 className='text-[1.6em] md:text-3xl font-bold py-8  text-[#d52c81] '>POPULAR TOY BRANDS</h1>
            </div>
            <div className='  '>
        <Marquee speed={40} pauseOnClick>
          <div >
            <img className='md:w-[50%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3hi0TG8stX9SzsRwwnjfypvQYexuyX-__W-gU56txy1sCbVjj4U122ypXltLg0RGULU&usqp=CAU" alt="" />
          </div>
          <div >
            <img className='md:w-[50%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sDTNroi5e5DrYoi5AykHIaMCt4zs9zXFCw&usqp=CAU" alt="" />
          </div>
          <div >
            <img className='md:w-[60%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLS6d9C-KA8MEZT7G9DBgw7Ey8rmv-AAHYPm5FKV9dpcpZaQ8lSsqh5TKbmPl05mACokQ&usqp=CAU" alt="" />
          </div>
          <div >
            <img className='md:w-[30%] w-[30%]' src="https://images-platform.99static.com//DK-wcNxFNPAtjeWVyj5lio6ogo8=/384x8:1623x1247/fit-in/500x500/99designs-contests-attachments/99/99209/attachment_99209854" alt="" />
          </div>
          <div >
            <img className='md:w-[50%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-iwD_fIGw6p5DzFBDG-26DIvrneJA9zO7LoIkq3YuqHjc3SgtfDoaYclBjy3U4XKYKQ&usqp=CAU" alt="" />
          </div>
          <div >
            <img className='md:w-[40%] w-[30%]' src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/https://brandyuva.in/wp-content/uploads/2017/09/barbie-toy-logo.jpg" alt="" />
          </div>
          <div >
            <img className='md:w-[30%] w-[30%]' src="https://static.brandirectory.com/logos/8de019f9-2fe9-4404-be48-78c4e2e3d7f9.png%3FFisher%2BPrice.png" alt="" />
          </div>
          

        </Marquee>
        </div>
        </div>
  );
};

export default MarqueeSection;



