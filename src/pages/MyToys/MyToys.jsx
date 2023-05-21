//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import Title from '../../../Hooks/Title';
import { AuthContext } from '../../Providers/AuthProviders';



const  MyToys = () => {
Title('My Toys')
  const { user } = useContext(AuthContext)
  console.log(user);
  //eslint-disable-next-line
  const [Dolls, setDolls] = useState([])
  const url = (`https://bunny-toyshop-server.vercel.app/mydolls?email=${user?.email}`)
  useEffect(() => {
    fetch(url)

      .then(res => res.json())
      .then((data) => {
        setDolls(data);
      })
  }, [url])

  const handle_delete = (_id) => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
           
            fetch(`https://bunny-toyshop-server.vercel.app/dolls/${_id}`, {method: "DELETE"} ,

            )
            .then(res => res.json())
            .then(delete_data => {
                // console.log(delete_data);
                if (delete_data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your doll has been deleted.Reload please...',
                        'success'
                    )
                }
                const remaining = Dolls.filter(Doll => Doll._id !== _id)
                setDolls(remaining)
              })
        }
    })
   
}
  return (
    <div>
      <div className='text-center '>
                
                <h1 className='text-[1.6em] md:text-3xl font-bold py-8  text-[#d52c81] '>My Toys</h1>
            </div>
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            
            <th>Delete</th>
            <th>Picture</th>
            <th>Available Quantity</th>
            <th>Sub-category</th>
            <th>See More...</th>
            <th>Update</th>

          </tr>
        </thead>
        {/* 


View Details button */}
        <tbody>
          {
            Dolls.map(Doll => <tr key={Doll._id}>
              <th>
                <button  onClick={() => { handle_delete(Doll._id) }} className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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
                <span className="badge badge-ghost badge-sm">{Doll.update_quantity}</span>
              </td>
              <td>{Doll.category}</td>
              <th>
                 <button  className="px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"><Link to = {`/View_Details/${Doll._id}`}>View Details</Link></button>
              </th>
              <th>
                 <button  className="px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white"><Link to = {`/Update_Doll/${Doll._id}`}>Update</Link></button>
              </th>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default MyToys;