//eslint-disable-next-line
import React from 'react';
import './GalleryImg.css'
import Img1 from '../../../assets/image/img1.webp'
import Img2 from '../../../assets/image/img2.jpg'
import Img3 from '../../../assets/image/img3.jpg'
import Img4 from '../../../assets/image/img4.jpg'
import Img5 from '../../../assets/image/img5.jpg'
import Img6 from '../../../assets/image/img6.webp'
import Img7 from '../../../assets/image/img7.jpg'
import Img8 from '../../../assets/image/img8.jpg'
import Img9 from '../../../assets/image/img9.jpg'

const GalleryImg = () => {

    let data = [
        {
            id : 1,
            imgSrc: Img1,
        },
        {
            id : 2,
            imgSrc: Img2,
        },
        {
            id : 3,
            imgSrc: Img3,
        },
        {
            id : 4,
            imgSrc: Img4,
        },
        {
            id : 5,
            imgSrc: Img5,
        },
        {
            id : 6,
            imgSrc: Img6,
        },
        {
            id : 7,
            imgSrc: Img7,
        },
        {
            id : 8,
            imgSrc: Img8,
        },
        {
            id : 9,
            imgSrc: Img9,
        },
    ]
    return (
        <div className='bg-[url("https://static.vecteezy.com/system/resources/previews/002/069/547/original/cute-cartoon-unicorn-seamless-baby-pattern-background-illustration-with-pastel-flowers-children-texture-for-kids-wallpaper-fills-web-page-background-vector.jpg")]'>
            <div>
                <h2 className='text-4xl font-extrabold text-center text-[#d52c81] py-10'>Gallery Grid</h2>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5' >
                {
                    data.map(d =><div className='pics'
                    key={d.id}
                    ><img className='w-[100%] h-[500px] rounded-md border-2 border-gray-100 shadow-2xl  shadow-pink-300 opacity-80 hover:opacity-100 cursor-zoom-in scale-75 hover:scale-125' src={d.imgSrc} alt=""  /></div>)
                }
            </div>
        </div>
    );
};

export default GalleryImg;

