import React, { useState } from 'react'
import { Button } from 'primereact/button'
import '../../src/components/css/Login.css'
import login from '../assets/log.svg'
import '../../src/components/css/Login.css'
import { useNavigate } from 'react-router'
import { SignUp } from './SignUp'
export const Login = () => {
    const [isGetStarted, setIsGetStarted] = useState(true);
    const navigate = useNavigate()
    const [form, setform] = useState({
        emp_name: '',
        password: ''
    })
    const submitHandler = (e) => {
        e.preventDefault()
        if (form.emp_name === 'abhigupta010' && form.password === 'abhi@123') {
            navigate('/dashboard');
        }
        else {
            alert("please enter valid Id and Password....");
        }
        setform({
            emp_name: '',
            password: ''
        })
    }
    const changeHandler = (e) => {
        setform((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const handleGetStarted = () => {
        setIsGetStarted(false);
    }
    return (
        <>
            {isGetStarted ? <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <h1>Chattle Login</h1>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            With the power of Chattle, you can now focus only on functionaries for your inventories
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <h4>Don't have an account?</h4>
                            <h5 href="#" className="underline text-white cursor-pointer" onClick={handleGetStarted}>Get Started!</h5>
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700 justify-center flex">Account Login</h3>
                        <form action="#" className="flex flex-col space-y-5" onSubmit={submitHandler}>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    key="id"
                                    type="text"
                                    value={form?.emp_name}
                                    id="emp_name"
                                    placeholder="Username"
                                    onChange={(e) => changeHandler(e)}
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        key="pss"
                                        type="password"
                                        value={form?.password}
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                </div>
                                <div className="flex items-center justify-end">
                                    <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Log in
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">or login with</span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                                <div className="flex flex-col space-y-4">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    >
                                        <div>
                                            <svg className="w-6" viewBox="0 0 32 32">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    >
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04"
                                                />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-blue-500 group-hover:text-white">Google</span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> : <SignUp setIsGetStarted={setIsGetStarted} />}
        </>
    )
}
