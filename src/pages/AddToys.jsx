//eslint-disable-next-line
import React from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Title from '../../Hooks/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// You can also pass an optional settings object
// below listed default settings
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
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const AddToys = () => {
    const Handle_Add_Doll = (event) => {
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
        const Add_doll = { name, price, category, seller_same, update_rating, update_quantity, update_description, update_seller_email, photo ,select }
        console.log(Add_doll);
        fetch("http://localhost:9000/dolls/",
        {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Add_doll),
        }
    )
        .then(res => res.json())
        .then(doll_data => {
            console.log(doll_data);
            if (doll_data.insertedId) {
                Swal.fire({
                    title: 'success',
                    text: 'Doll data added successfully!',
                    icon: 'success',
                    confirmButtonText: '❤️K',
                  })
                  
                  Navigate("/")
            }
        })

    

    }

    Title('Add Toys')

    return (
        <div data-aos="flip-left"> 
            <div className='mt-4'>
                <p className='text-[#a00553] text-2xl text-center  '>Add Doll Information :</p>

                <div className='w-[62%] mx-auto my-6  text-[#ad0a5b] border border-black'>
                    <form onSubmit={ Handle_Add_Doll} className='bg-[#f3f3f3] py-4' action="">
                        <p className='text-2xl text-center text-[#374151] font-bold'>Add Existing Disney Dolls Details</p>
                        <p className='md:text-[.9em] text-[.73em] text-center text-[#374151]'>Click here to add Disney Dolls details.  Here you can add all the details.  Thanks for visiting the Disney Dolls page.</p>
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Doll Name</p>
                                    <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Enter Doll Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold '>Add Price</p>
                                    <p className='pt-1 md:pt-2'><input name='price' id="price" type='text' required="required" placeholder='Enter Doll Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Category</p>
                                    <p className='pt-1 md:pt-2'><input name='category' id="category" type='text' required="required" placeholder='Enter Doll Category' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Seller Name</p>
                                    <p className='pt-1 md:pt-2'><input name='seller_same' id="seller_same" type='text' required="required" placeholder='Enter Doll Seller Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Category</p>
                                    <p ><select name='select' id="select">
                                        {/* <option value="">Disney Dolls</option> */}
                                        <option value="Frozen">Frozen Doll</option>
                                        <option value="Mickey">Mickey Mouse Doll</option>
                                        <option value="Princess">Princess Doll</option>
                                        <option value="Pooh">Pooh Doll</option>
                                      
                                    </select></p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Rating</p>
                                    <p className='pt-1 md:pt-2'><input name='update_rating' id="update_rating" type='number' required="required" placeholder='Enter Rating' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Quantity</p>
                                    <p className='pt-1 md:pt-2'><input name='update_quantity' id="update_quantity" type='number' required="required" placeholder='Enter Doll Quantity' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Description</p>
                                    <p className='pt-1 md:pt-2'><input name='update_description' id="update_description" type='text' required="required" placeholder='Enter Doll Description' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[1em] font-semibold'>Add Seller Email</p>
                                    <p className='pt-1 md:pt-2'><input name='update_seller_email' id="details" type='text' required="required" placeholder='Enter Seller Email' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.2%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[1em] font-semibold'>Add Photo</p>
                            <p className='pt-1 md:pt-2'><input name='photo' id="photo" type='text' required="required" placeholder='Enter Doll photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[1em]" /></p>
                        </div>

                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Add a Doll" className=" text-black bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 border-2 border-gray-300 rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;