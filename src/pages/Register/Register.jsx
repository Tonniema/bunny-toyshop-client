//eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';

import { AuthContext } from '../../Providers/AuthProviders';
import Title from '../../../Hooks/Title';
import { useNavigate } from 'react-router-dom';



const Register = () => {

const navigate = useNavigate()

    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")

    const { Create_User} = useContext(AuthContext)
    const Handle_Submit = (event) => {
        event.preventDefault();
        set_success("")
        const Full_Form = event.target
        const name = Full_Form.name.value
        const Photo_URL = Full_Form.photo.value
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        // console.log(name, Photo_URL, email, password);
        set_error_Message("")

        //VALIDATION
        if (!/(?=.*[A-Z])/.test(password)) {
            set_error_Message("Please at least set one uppercase later of your password")
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            set_error_Message("Please at least set one numerical number of your password")
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            set_error_Message("Please at least set one special case letter [?,=,*,!,@,#,$,&,] of your password")
            return;
        } else if (!/.{8}/.test(password)) {
            set_error_Message("Please Ensure the length of your password is 8.")
            return;
        }

        Create_User(email, password)
            .then((userCredential) => {
                // Signed In
                const user = userCredential.user;
                console.log(user);
                set_error_Message("")
                // event.target.reset()
                set_success("User has been created successfully")
                updateProfile(user, {
                    displayName: name,
                    photoURL: Photo_URL
                  })
                  navigate("/Login")
                   
            })
            .catch((error) => {
                //eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                set_error_Message(errorMessage)
                // ..
            });

    }

    Title('Register')
    return (
        <div className=''>
            <section className='px-1 md:px-16 pt-2 md:pt-6 bg-[#f3f3f3] pb-14  bg-[url("https://thumbs.dreamstime.com/b/toy-bear-happy-birthday-banner-website-cute-vintage-concept-89137456.jpg")]'>
            <div>
                <div className='flex md:justify-end justify-center'>
                <div className='w-[60%] '>
                    <form onSubmit={Handle_Submit} className='mt-7 bg-transparent border-2 border-black backdrop-blur-[2px] ' action="">
                        <p className='text-center text-black font-[1000] text-[.911em] pt-6 md:pt-10 pb-1 md:pb-7 md:text-[2em]'>Register your account</p>
                        <p className='pt-3'><hr className=' w-[92%] border-[.1px] border-[#e7e7e7] mx-auto' /></p>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-bold text-black'>Email address</p>
                            <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" placeholder='Enter Your Email address' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>User Name</p>
                            <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Enter Your User Name' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>Photo URL</p>
                            <p className='pt-1 md:pt-2'><input name='photo' id="photo" type='text' required="required" placeholder='Enter Your Photo URL ' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>Password</p>
                            <p className='pt-1 md:pt-2'><input name='password' id="password" type='text' required="required" placeholder='Enter your Password' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>


                        <div className='w-[80%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Submit" className=" bg-slate-500 w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em]" /></p>
                        </div>
                        
                        <p className='text-center'>{error_Message}</p>
                        <p className='text-center'>{success}</p>
                    </form>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
};



export default Register;