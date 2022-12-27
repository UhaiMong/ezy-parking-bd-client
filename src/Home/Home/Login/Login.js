import {Divider} from 'antd';
import React, { useState,useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/icon/logo.png'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../../Context/Authprovider';

const Login = () => {

    const { signIn, googleSignin } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    // login with email and password
    const handleToLogin = (data) => {
        setLoginError('');
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert("Successfully signed in");
                navigate('/')
            })
            .catch(error => {
                console.error(error.message);
                if (error) {
                    setLoginError(error.message);
                }
            })
    }

    const LoginWithGoogle = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
        })
    }
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo}
                        alt="Company logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            New here? Go to register
                        </Link>
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(handleToLogin)}
                    className="mt-8 space-y-6">
                    <input
                        type="hidden"
                        name="remember"
                        defaultValue="true" />

                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="my-2">
                                Email address
                            </label>

                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="my-2">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer" }
                                })}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                        </div>
                        <div>
                            {
                                loginError && <p className='text-xs text-red-700'>{loginError}</p>
                            }
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <Divider>OR</Divider>
                <button
                    className='mt-4 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={LoginWithGoogle}
                >Continue with <FaGoogle className='inline text-xl text-cyan-500 mr-3' />
                </button>
            </div>
        </div>
    );
};

export default Login;