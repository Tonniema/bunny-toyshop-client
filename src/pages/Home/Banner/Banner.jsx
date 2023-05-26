
//eslint-disable-next-line
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-[100%] h-[700px] mx-auto opacity-50' src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9333.jpg?w=1060&t=st=1684401660~exp=1684402260~hmac=44409b897e4014063eb78cb588d4fc00a69de49469cc22ed14630e5affca244a" alt="" />
        <div className="absolute top-[400px] md:left-96 left-[6em]">
							<h1 className="w-[70%] font-extrabold md:text-5xl text-xl text-center">
								Welcome to <br />{" "}
								<span className=" text-[#85184a]">
									{" "}
									Bunny <span className='text-[#0c1a62]'>Toy</span><span className='text-stone-800'>shop</span>
								</span>
							</h1>
							<p className="w-[70%] md:text-lg text-sm pt-2 text-center">
              Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!! We design toys not just for kids but with kids
							</p>
							<div className="flex justify-center">
							<Link to="/About">
								<div className="">
								<button
									type="button"
									className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"
								>
								About Us
								</button>
								</div>
							</Link>
							</div>
						</div>
        </SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[700px] mx-auto opacity-50' src="https://img.freepik.com/free-photo/little-girl-reading-book-with-her-teddy-bears_329181-9409.jpg?w=1060&t=st=1684401766~exp=1684402366~hmac=bc000469c196e85a88375a978cd8fb884c8b88daf5d785f60f91f3cffa810a50" alt="" />
        <div className="absolute top-[400px] md:left-96 left-[6em]">
							<h1 className="w-[70%] font-extrabold md:text-5xl text-xl text-center">
								Welcome to <br />{" "}
								<span className=" text-[#85184a]">
									{" "}
									Bunny <span className='text-[#0c1a62]'>Toy</span><span className='text-stone-800'>shop</span>
								</span>
							</h1>
							<p className="w-[70%] md:text-lg text-sm pt-2 text-center">
              Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!! We design toys not just for kids but with kids
							</p>
							<div className="flex justify-center">
							<Link to="/About">
								<div className="">
								<button
									type="button"
									className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"
								>
								About Us
								</button>
								</div>
							</Link>
							</div>
						</div>
        </SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[700px] mx-auto opacity-50' src="https://img.freepik.com/free-photo/little-girl-hugging-toy-bear_53876-144190.jpg?w=1060&t=st=1684401997~exp=1684402597~hmac=59524038955b7772c8bb0464a8d117d90dc7fc55beff54534edb59c71057dd02" alt="" />
        <div className="absolute top-[400px] md:left-96 left-[6em]">
							<h1 className="w-[70%] font-extrabold md:text-5xl text-xl text-center">
								Welcome to <br />{" "}
								<span className=" text-[#85184a]">
									{" "}
									Bunny <span className='text-[#0c1a62]'>Toy</span><span className='text-stone-800'>shop</span>
								</span>
							</h1>
							<p className="w-[70%] md:text-lg text-sm pt-2 text-center">
              Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!! We design toys not just for kids but with kids
							</p>
							<div className="flex justify-center">
							<Link to="/About">
								<div className="">
								<button
									type="button"
									className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"
								>
								About Us
								</button>
								</div>
							</Link>
							</div>
						</div>
        </SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[700px] mx-auto opacity-50' src="https://img.freepik.com/free-photo/children-playing-birthday-game_23-2148779569.jpg?w=1380&t=st=1684401942~exp=1684402542~hmac=fb5e04852ca0899fa739e180a7cbd164fd1d9ad23b316195516b7b95058511fb" alt="" />
        <div className="absolute top-[400px] md:left-96 left-[6em]">
							<h1 className="w-[70%] font-extrabold md:text-5xl text-xl text-center">
								Welcome to <br />{" "}
								<span className=" text-[#85184a]">
									{" "}
									Bunny <span className='text-[#0c1a62]'>Toy</span><span className='text-stone-800'>shop</span>
								</span>
							</h1>
							<p className="w-[70%] md:text-lg text-sm pt-2 text-center">
              Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!! We design toys not just for kids but with kids
							</p>
							<div className="flex justify-center">
							<Link to="/About">
								<div className="">
								<button
									type="button"
									className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"
								>
								About Us
								</button>
								</div>
							</Link>
							</div>
						</div>
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
}
