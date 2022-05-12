import React from 'react'
import { SettingsModal } from './SettingsModal';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import 'tw-elements';


export const Sidebar = ({ setting, setSetting }) => {
    if (document.getElementById('btn-back-to-top')) {
        // Get the button
        let mybutton = document.getElementById('btn-back-to-top');

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = 'block';
            } else {
                mybutton.style.display = 'none';
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener('click', backToTop);

        function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    return (
        <div className='md:w-3/12 w-6/12 h-auto shadow-2xl '>
            <div className="border-b py-3 mt-1 flex justify-around">
                <p className='text-xl font-semibold'>nutrition-tracker v1.0.0</p>
            </div>
            <div className="p-4 space-y-8">
                <div className='space-y-6'>
                    <h1 className='text-xl text-gray-400 text-center mb-4'>Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-200 hover:text-blue-700 cursor-pointer">
                            <SettingsAccessibilityIcon className="text-gray-300" style={{ color: "purple" }} />
                            <button className='' data-bs-toggle="modal" data-bs-target="#settingsModal" type='button'>Settings</button>
                            <SettingsModal setting={setting} setSetting={setSetting} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-200 hover:text-blue-600 cursor-pointer">
                        <FastfoodIcon className="text-gray-300" style={{ color: "purple" }} />
                        <button onClick={() => document.getElementById('AddIntakeForm').scrollIntoView({ behavior: "smooth", block: "center" })}
                            className='text-gray-600'>Add Intake</button>
                    </div>
                </div>
                <div className="">
                    <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-200 hover:text-blue-600 cursor-pointer">
                        <ListAltIcon className="text-gray-300" style={{ color: "purple" }} />
                        <button onClick={() => document.getElementById('NutritionCard').scrollIntoView({ behavior: "smooth", inline: "nearest" })}
                            className='text-gray-600'>Nutrition</button>
                    </div>
                </div>
                <div className="">
                    <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-200 hover:text-blue-600 cursor-pointer">
                        <ShowChartIcon className="text-gray-300" style={{ color: "purple" }} />
                        <button onClick={() => document.getElementById('CalorieChart').scrollIntoView({ behavior: "smooth", inline: "nearest" })}
                            className='text-gray-600'>History</button>
                    </div>
                </div>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-4 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hidden bottom-5 left-5 fixed"
                    id="btn-back-to-top"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-4 h-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
