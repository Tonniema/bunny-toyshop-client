//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Mickey = () => {
    const { user } = useContext(AuthContext);
  const navigate = useNavigate();
    const [Mickey, setMickey] = useState([])
    useEffect(() => {
        fetch('https://bunny-toyshop-server.vercel.app/mickey')
            .then(res => res.json())
            .then(Doll => setMickey(Doll))
    }, [])
    console.log(Mickey);
    useEffect(() => {
        if (user) {
          // User is logged in, navigate to the desired page
          const desiredPage = sessionStorage.getItem('desiredPage');
          if (desiredPage) {
            navigate(desiredPage);
            sessionStorage.removeItem('desiredPage');
          }
        }
      }, [user, navigate]);
    
      const handleButtonClick = (d1) => {
        if (!user) {
            Swal.fire({
                title: 'Please Login First',
              })
          sessionStorage.setItem('desiredPage', `/View_Details/${d1}`);
          navigate('/login');
        } else {
          navigate(`/View_Details/${d1}`);
        }
      };
    return (
        <div>

            <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-11 gap-3 bg-[url("https://images.squarespace-cdn.com/content/v1/5fb43dd79d63ac327876d9d8/1659831123917-19QRZSXLHRBUNQMKJ021/top+view+of+flowers.jpg?format=2500w")] '>
                {Mickey.map(m1 => <section key={m1._id}>
                    <div className='bg-[#f0e8e7] w-[100%] pb-2 md:py-7   rounded-sm border-2 border-gray-100 shadow-2xl  shadow-pink-300 '>
                        <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={m1.photo} alt="" /> </div>
                        <div className='text-center'>
                            <p className='pt-3 text-lg font-bold'>{m1.name}</p>
                            <p>{m1.category}</p>
                            <p>Price: ${m1.price}</p>
                            <p>Rating: ✵{m1.update_rating}✵</p>
                            <p>Powered by {m1.seller_same}</p>
                            <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6   transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white" onClick={() => handleButtonClick(m1._id)}>
                      <Link to={`/View_Toy_Data/${m1._id}`}>View Details</Link>
                    </button>
                        </div>
                    </div>
                </section>)
                }
            </h2>
        </div>
    );
};




export default Mickey;
 