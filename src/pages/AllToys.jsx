//eslint-disable-next-line
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Title from '../../Hooks/Title';


const AllToys = () => {
  const Loaded_Dolls = useLoaderData()
  const [totalData, setTotalDate] = useState(Loaded_Dolls)
  const [searchText, setSearchText] = useState('')
  const [Show_All , setShow_All] = useState(false)
  const handle_show_all = () => {
    setShow_All(true)
}

  const handleSearch = () => {
    fetch(`https://bunny-toyshop-server.vercel.app/searchText/${searchText}`)
      .then(res => res.json())
      .then(data => {
        setTotalDate(data);
      })
  }
  Title('All Toys')

  return (
    <section>
      
      <div className="flex my-4 justify-center items-center gap-x-3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className=" py-2 pl-10 pr-4 w-[30%] text-gray-800 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search"
        />
        <button onClick={handleSearch} className='px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white'>Search</button>
      </div>
      <div className='text-center '>
                
                <h1 className='text-[1.6em] md:text-3xl font-bold py-8  text-[#d52c81] '>All Toys</h1>
            </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Picture</th>
                <th>Available Quantity</th>
                <th>Sub-category</th>
                <th>See More...</th>
              </tr>
            </thead>
            {/* 
    
    
    View Details button */}
            <tbody>
              {
                totalData?.slice(0 , Show_All ? 10000 : 20).map(Doll => <tr key={Doll._id}>
                  <th>

                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={Doll.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{Doll.name}</div>
                        <div className="text-sm opacity-50">${Doll.price}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>On Stock:</p>
                    <br />
                    <span className="badge badge-ghost badge-sm">{Doll.update_quantity} pcs</span>
                  </td>
                  <td>{Doll.category}</td>
                  <th>
                    <button className="px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"><Link to={`/View_Details/${Doll._id}`}>View Details</Link></button>
                  </th>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      {
        !Show_All && <div className='flex justify-center my-4'>
        <button onClick={handle_show_all} className="px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white ">Show All</button>
        </div>
      }
    </section>
  );
};

export default AllToys;
