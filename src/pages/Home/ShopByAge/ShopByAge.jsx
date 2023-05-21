//eslint-disable-next-line
import React, { useCallback } from 'react';



const ShopByAge = () => {
    
    return (
        <div>
             
            <div className='bg-[url("https://wallpaperaccess.com/full/867165.jpg")] py-[7em] opacity-90 '>
            <div className=' text-center text-black pb-6 leading-9'>
                <h2 className='text-3xl font-extrabold'>SHOP BY AGE</h2>
                <p className='font-extrabold'>WE HAVE PRODUCTS FOR ALL AGES. OUR ASSISTANTS ALWAYS HELP YOU TO DO RIGHT CHOICE</p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-evenly '>
            
            <div className='flex flex-col  items-center text-black '>
            <img className='w-[200px] h-[200px] rounded-full pb-5 ' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-3-600x700.jpg" alt=""  />
            <p className='font-bold text-[1.3em]'>2 TO 4 YEARS</p>
            </div>
            <div className='flex flex-col  items-center text-black '>
            <img className='w-[200px] h-[200px] rounded-full pb-5' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-3-600x700.jpg" alt="" />
            <p className='font-bold text-[1.3em]'>5 TO 7 YEARS</p>
            </div>
            <div className='flex flex-col  items-center text-black '>
            <img className='w-[200px] h-[200px] rounded-full pb-5' src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/3-2-600x700.jpg" alt=""  />
            <p className='font-bold text-[1.3em]'>8 TO 13 YEARS</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShopByAge;