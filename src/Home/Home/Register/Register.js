import { Divider } from 'antd';
import React, { useState, useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../../Assets/images/login.svg'
import { AuthContext } from '../../../Context/Authprovider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleSignin, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const navigate = useNavigate();

    const handleToSignup = (data) => {
        setSignupError('');
        createUser(data.email, data.password, data.condition)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                alert("Created user successfully");
                const userInfo = {
                    displayName: data.name,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name, data.vehicle);
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setSignupError(error.message);
            })

    }

    // create user collections

    const saveUser = (email, name, vehicle,phone,licence) => {
        const user = { email, name, vehicle,phone,licence };
        fetch('https://smart-resale-stall-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/');
            })
    }

    // google login

    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (

        <div className='h-[800] w-full flex flex-col md:flex-row justify-center items-center shadow-2xl my-10'>
            <img className='w-2/5' src={signup} alt="" />
            <div className='w-3/5'>
                <h1 className='text-2xl font-semibold text-center'>Register Now</h1>
                <form onSubmit={handleSubmit(handleToSignup)}>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            type='text'
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"} placeholder='Full Name'
                        />
                        {errors.name?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your name is required</p>}
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            type='tel'
                            {...register("phone", { required: true })}
                            aria-invalid={errors.phone ? "true" : "false"} placeholder='Phone'
                        />
                        {errors.phone?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your phone number is required</p>}
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            type='email'{...register("email",
                            { required: "Email address is required" }
                        )}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder='Email'
                        />
                        {errors.email && <p
                            role='alert' className='text-red-700 font-xs'>{errors.email?.message}</p>}
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            type='password'{...register("password",
                            {
                                required: "Password is required",
                            },
                        )}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p
                            role='alert' className='text-red-700 font-xs'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {signupError && <p className='text-red-700'>{signupError}</p>}
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Type of vehicle</span>
                        </label>
                        <select
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            {...register('vehicle', { required: "Please select one" })}
                        >
                            <option selected>Bike</option>
                            <option>Private Car</option>
                            <option>Microbus</option>
                            <option>Auto Rickshaw</option>
                        </select>
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Licence NO</span>
                        </label>
                        <input
                            className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            type='tel'
                            {...register("licence", { required: true })}
                            aria-invalid={errors.licence ? "true" : "false"} placeholder='Car Licence'
                        />
                        {errors.licence?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your car licence is required</p>}
                    </div>

                    <div className=" w-full my-3">
                        <input className='rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' type="submit" value="Signup" />
                    </div>

                    <div>
                        <span>Already have an account? <Link className='text-indigo-700 font-semibold hover:underline text-xs' to='/login'>Go to login</Link></span>
                    </div>


                </form>
                <div className=' w-full my-3'>
                    <Divider>OR</Divider>

                    <button onClick={handleGoogleSignIn} className='mt-4 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Continue with <FaGoogle className='inline text-xl text-cyan-500 mr-3'/></button>
                </div>
            </div>
        </div>
    );
};

export default Register;