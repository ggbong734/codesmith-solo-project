import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ setUsername }) => {
    let navigate = useNavigate();
    const verifyUser = () => {
        let username = document.getElementById("usernameLoginForm").value;
        let password = document.getElementById("passwordLoginForm").value;
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": username, "password": password }),
        }).then(response => response.json())
            .then(verification => {
                console.log('successfully logged in');
                if (verification) {
                    setUsername(username);
                    navigate("/home");
                }
                else {
                    console.log('Wrong password!');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-screen text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center
                    flex-wrap h-full g-6 bg-gray-50">
                    <div className="xl:w-3/12 lg:w-4/12 md:w-5/12">
                        <form className='bg-gray-100 p-4 rounded-lg border-2 border-gray-200 shadow-lg'>
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center text-lg font-semibold mx-4 mb-2 text-gray-700">Nutrition Tracker</p>
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="usernameLoginForm"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="passwordLoginForm"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-md leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => { navigate('/home') }}
                                >
                                    Login
                                </button>
                                <p className="text-md font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    > Register
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
