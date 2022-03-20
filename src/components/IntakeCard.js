import React from 'react'
import { Intake } from './Intake'
import { AddIntakeForm } from './AddIntakeForm';


export const IntakeCard = ({ intakes, setIntakes }) => {
    return (
        <div className="flex flex-col bg-gray-50 rounded overflow-hidden shadow-lg mx-4 my-2 px-4 py-2">
            <div className="flex flex-row px-6 justify-center">
                <div className="font-bold text-gray-500 text-3xl mb-5">
                    INTAKE
                </div>
            </div >
            <div className='flex flex-col items-center mb-5'>
                <ul className="bg-white rounded-lg border border-gray-200 w-2/5  text-gray-900">
                    {intakes.map((intake) => (
                        <Intake key={intake.id} intake={intake} setIntakes={setIntakes} intakes={intakes} />
                    ))}
                </ul>
            </div>
            <AddIntakeForm intakes={intakes} setIntakes={setIntakes} />
        </div>

    )
}
