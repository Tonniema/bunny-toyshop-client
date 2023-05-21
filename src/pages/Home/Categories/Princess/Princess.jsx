//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Princess = () => {
    const [Princess, setPrincess] = useState([])
    useEffect(() => {
        fetch('https://bunny-toyshop-server.vercel.app/princess')
            .then(res => res.json())
            .then(Doll => setPrincess(Doll))
    }, [])
    console.log(Princess);
    return (
        <div>

            <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-11 gap-3 bg-[url("https://images.squarespace-cdn.com/content/v1/5fb43dd79d63ac327876d9d8/1659831123917-19QRZSXLHRBUNQMKJ021/top+view+of+flowers.jpg?format=2500w")] '>
                {Princess.map(p1 => <section key={p1._id}>
                    <div className='bg-[#f0e8e7] w-[100%] pb-2 md:py-7   rounded-sm border-2 border-gray-100 shadow-2xl  shadow-pink-300 '>
                        <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={p1.photo} alt="" /> </div>
                        <div className='text-center '>
                            <p className='pt-3 text-lg font-bold'>{p1.name}</p>
                            <p>{p1.category}</p>
                            <p>Price: ${p1.price}</p>
                            <p>Rating: ✵{p1.update_rating}✵</p>
                            <p>Powered by {p1.seller_same}</p>
                            <button  className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"><Link to = {`/View_Details/${p1._id}`}>View Details</Link></button>
                        </div>
                    </div>
                </section>)
                }
            </h2>
        </div>
    );
};






export default Princess;