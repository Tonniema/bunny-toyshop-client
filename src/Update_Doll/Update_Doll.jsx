//eslint-disable-next-line
import React from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Title from '../../Hooks/Title';


const Update_Doll = () => {
    const navigate = useNavigate();
    const Loaded_doll = useLoaderData()
    console.log(Loaded_doll);
    const Handle_Update_Doll = (event) => {
        
        event.preventDefault();
        const Full_Form = event.target
        const name = Full_Form.name.value
        const price = Full_Form.price.value
        const category = Full_Form.category.value
        const seller_same = Full_Form.seller_same.value
        const select = Full_Form.select.value

        const update_rating = Full_Form.update_rating.value
        const update_quantity = Full_Form.update_quantity.value
        const update_description = Full_Form.update_description.value
        const update_seller_email = Full_Form.update_seller_email.value

        const photo = Full_Form.photo.value
        const Update_doll = { name, price, category, seller_same, update_rating, update_quantity, update_description, update_seller_email, photo ,select }
        console.log(Update_doll);
        fetch(`https://bunny-toyshop-server.vercel.app/dolls/${Loaded_doll._id}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Update_doll),
        })

            .then(res => res.json())
            .then(update_toy => {
                console.log(update_toy);
                if (update_toy.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Your doll data updated successfully!',
                        icon: 'success',
                        confirmButtonText: '❤️K',
                      })
                      
                      navigate("/MyToys")
                  }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'please update at least 1 property!',
                      })
                  }
            })
    
    }

    Title('Update Toys')

    return (
        <div> 
            <div className='mt-4'>
                <p className='text-[#a00553] text-2xl text-center  '>Update Doll Information :</p>

                <div className='w-[62%] mx-auto my-6  text-[#ad0a5b] border border-black'>
                    <form onSubmit={ Handle_Update_Doll} className='bg-[#f3f3f3] py-4' action="">
                        <p className='text-2xl text-center text-[#374151] font-bold'>Update Existing Disney Dolls Details</p>
                        <p className='md:text-[.9em] text-[.73em] text-center text-[#374151]'>Click here to update Disney Dolls details. Here you can update all the details.  Thanks for visiting the Disney Dolls page.</p>
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Doll Name</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.name} name='name' id="name" type='text' required="required" placeholder='Enter Doll Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold '>Update Price</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.price} name='price' id="price" type='text' required="required" placeholder='Enter Doll Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Category</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.category} name='category' id="category" type='text' required="required" placeholder='Enter Doll Category' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Seller Name</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.seller_same} name='seller_same' id="seller_same" type='text' required="required" placeholder='Enter Doll Seller Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Category</p>
                                    <p ><select name='select' id="select">
                                        <option value="Frozen">Frozen Doll</option>
                                        <option value="Mickey">Mickey Mouse Doll</option>
                                        <option value="Princess">Princess Doll</option>
                                        <option value="Pooh">Pooh Doll</option>
                                      
                                    </select></p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Rating</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.update_rating} name='update_rating' id="update_rating" type='number' required="required" placeholder='Enter Rating' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Quantity</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.update_quantity} name='update_quantity' id="update_quantity" type='number' required="required" placeholder='Enter Doll Quantity' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Description</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.update_description}name='update_description' id="update_description" type='text' required="required" placeholder='Enter Doll Description' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[1em] text-[.85em] font-semibold'>Update Seller Email</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.update_seller_email}name='update_seller_email' id="details" type='text' required="required" placeholder='Enter Seller Email' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.2%] mx-auto pt-3'>
                            <p className='md:text-[1em] text-[.85em] font-semibold'>Update Photo</p>
                            <p className='pt-1 md:pt-2'><input defaultValue={Loaded_doll?.photo} name='photo' id="photo" type='text' required="required" placeholder='Enter Doll photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>

                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input  type="submit" value="Update a Doll" className=" text-black bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 border-2 border-gray-300 rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Update_Doll;