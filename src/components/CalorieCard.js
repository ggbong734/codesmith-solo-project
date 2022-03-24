import React from 'react'

export const CalorieCard = ({ intakes, calorieBudget }) => {
    const totalCalories = intakes.reduce((acc, intake) => acc + intake.calories, 0);
    const percentOfBudget = (totalCalories / calorieBudget * 100).toFixed(1);
    return (
        <div className=" flex flex-col bg-gray-50 rounded overflow-hidden shadow-lg mx-4 mb-1 p-4 items-center ">
            <div className="w-2/3 px-6 pb-1 pt-1 text-center">
                <div className="font-bold text-gray-500 text-4xl mb-4">
                    CALORIES
                </div>
                <div className="w-full bg-gray-200 rounded-full">
                    {percentOfBudget > 100 ?
                        <div className="bg-red-500 text-lg font-medium text-red-100 text-center p-3 leading-none rounded-full"
                            style={{ width: `${Math.min(100, percentOfBudget)}%` }}> {percentOfBudget}%</div>
                        :
                        percentOfBudget <= 0.1 ?
                            <div className="bg-blue-500 text-lg font-medium text-blue-100 text-center p-3 leading-none rounded-l-full"
                                style={{ width: `${percentOfBudget}%` }}></div>
                            :
                            <div className="bg-blue-500 text-lg font-medium text-blue-100 text-center p-3 leading-none rounded-l-full"
                                style={{ width: `${percentOfBudget}%` }}> {percentOfBudget}%</div>
                    }
                </div>
                <div className="flex px-6 pt-3 justify-evenly content-center">
                    <div className="font-bold text-2xl text-gray-400">Food {totalCalories}</div>
                    <div> | </div>
                    <div className="font-bold text-2xl text-gray-400">Budget {calorieBudget}</div>
                </div>
            </div >
        </div>
    )
}
