import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [message, setMessage] = React.useState('')
    const {loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        try {
            await loginUser(data.email, data.password);
            alert("User logged in successfully");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password")
            console.log(error)
            
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("User logged in successfully");
            navigate("/");
        } catch (error) {
            alert("Google sign in failed");
            console.log(error)
            
        }

    }
    return (
        <>

            <Navbar />
            <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
                <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <h2 className='text-xl font-semibold mb-4'>Please login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">

                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                            <input {...register("email", { required: true })}
                                type="email" name="email" id="email" placeholder='Enter your email' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:shadow-outline' required />
                        </div>
                        <div className="mb-4">

                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                            <input {...register("password", { required: true })}
                                type="password" name="password" id="password" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:shadow-outline' required />
                        </div>
                        {
                            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                        }
                        <div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Login</button>
                        </div>
                    </form>
                    <p className='align-baseline font-medium mt-4 text-sm'>Don't have an account? Please <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register</Link> </p>
                    {/*google login*/}
                    <div>
                        <button onClick={handleGoogleSignIn}
                            className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>
                            <FcGoogle className='mr-2' />
                            Sign in with Google
                        </button>
                    </div>
                    <p className='mt-5 text-center text-gray-500 text-xs'>2025 BookLoom. All rights reserved.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login