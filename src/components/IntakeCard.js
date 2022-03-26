import React from 'react'
import { Intake } from './Intake'
import { AddIntakeForm } from './AddIntakeForm';

export const IntakeCard = ({ intakes, setIntakes }) => {
    const sortIntake = () => {
        const sortedIntakes = intakes.sort((a, b) => {
            return b.calories - a.calories
        })
        setIntakes(sortedIntakes);
    }

    return (
        <div className="flex flex-col bg-gray-50 rounded overflow-hidden shadow-lg mx-4 my-2 px-4 py-2">
            <div className="flex flex-row px-6 justify-center">
                <div className="font-bold text-gray-500 text-3xl mb-5">
                    INTAKE
                </div>
            </div >
            <div className='flex flex-col items-center mb-5'>
                {intakes.length > 0 &&
                    <ul className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg border border-gray-200 w-5/12 text-gray-900">
                        <ul className="bg-white rounded-lg border border-gray-200 m-1 text-gray-900">
                            {intakes.map((intake, index) => (
                                index % 2 === 0 ?
                                    <Intake key={intake.id} intake={intake} setIntakes={setIntakes} intakes={intakes} bgColor={'bg-white'} />
                                    :
                                    <Intake key={intake.id} intake={intake} setIntakes={setIntakes} intakes={intakes} bgColor={'bg-slate-100'} />
                            ))}
                        </ul>
                    </ul>

                }
                {intakes.length > 0 &&
                    <button onClick={() => sortIntake()}></button>
                }
            </div>
            <AddIntakeForm intakes={intakes} setIntakes={setIntakes} />
        </div>

    )
}
