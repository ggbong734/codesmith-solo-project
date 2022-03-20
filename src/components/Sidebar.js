import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ClearAllIcon from '@mui/icons-material/ClearAll'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'



export const Sidebar = () => {
    return (
        <div className='md:w-3/12 w-6/12 h-screen shadow-2xl '>
            <div className="border-b py-3 mt-1 flex justify-around">
                <p className='text-xl font-semibold'>nutrition-tracker v1.0.0</p>
            </div>
            <div className="p-4 space-y-8">
                <div className='space-y-6'>
                    <h1 className='text-xl text-gray-400'>Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <DonutLargeIcon className="text-gray-300" style={{ color: "gray" }} />
                            <p className=''>Settings</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ClearAllIcon className="text-gray-300" />
                            <p className='text-gray-600'>Add Intake</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ArrowUpwardIcon className="text-gray-300" />
                            <p className='text-gray-600'>Nutrition</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-xl text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ArrowDownwardIcon className="text-gray-300" />
                            <p className='text-gray-600'>Line chart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
