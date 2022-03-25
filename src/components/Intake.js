import { ConstructionOutlined } from '@mui/icons-material';
import React from 'react'

export const Intake = ({ intake, setIntakes, intakes, bgColor }) => {
    const deleteIntake = (id) => {
        fetch('http://localhost:3000/intake', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": id }),
        }).then(response => response.json())
            .then(data => {
                setIntakes(intakes.filter(intake => intake.id != id));
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <li className={`px-6 py-1.5 border-b-2 ${bgColor} border-gray-100 w-full hover:bg-gray-200 hover:text-gray-800
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500`}>
            <div className="flex flex-row justify-between items-center">
                <span className='text-lg'>{intake.item}, {intake.quantity} {intake.unit} </span>
                <div>
                    <span className='text-gray-500 text-lg'>{intake.calories} cals</span>
                    <button onClick={() => deleteIntake(intake.id)}
                        className="text-xl text-red-300 py-0.5 px-2 ml-6 cursor-pointer border rounded-md border-red-200 bg-red-100 hover:bg-red-400 hover:text-gray-100
                focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
                transition
                duration-500 ">x</button>
                </div>

            </div>

        </li>
    )
}
