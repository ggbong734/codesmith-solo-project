import React from 'react'

export const Nutrition = ({ nutrition, dv, corrFactor }) => {
    const percentDV = (parseFloat(dv) * corrFactor).toFixed(1);
    return (
        <li className='px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500
    focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
    transition
    duration-500'>
            <div className="flex flex-row justify-between items-center">
                <span className='text-lg text-gray-700'>{nutrition} </span>
                <div>
                    {percentDV > 120 ?
                        <span className='text-purple-500 font-semibold text-lg'>{percentDV}%</span>
                        :
                        percentDV < 20 ?
                            <span className='text-orange-900 font-semibold text-lg'>{percentDV}%</span>
                            :
                            <span className='text-gray-500 text-lg'>{percentDV}%</span>
                    }

                </div>
            </div>
        </li>
    )
}
