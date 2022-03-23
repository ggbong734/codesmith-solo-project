import React from 'react'
import { Nutrition } from './Nutrition';

export const NutritionCard = ({ intakes, calorieBudget }) => {
    const corrFactor = 2000 / calorieBudget;
    const nutritions = {
        ca: "Calcium",
        chocdf: "Carbohydrate",
        chole: "Cholesterol",
        fasat: "Saturated fats",
        fat: "Total fats",
        fe: "Iron",
        foldfe: "Folate",
        k: "Potassium",
        mg: "Magnesium",
        na: "Sodium",
        nia: "Niacin",
        p: "Phosporus",
        procnt: "Protein",
        ribf: "Riboflavin",
        thia: "Thiamin",
        vitb6a: "Vitamin B-6",
        vitb12: "Vitamin B-12",
        vitc: "Vitamin C",
        vitd: "Vitamin D",
        zn: "Zinc"
    };

    const dvs = Object.assign({}, nutritions);
    for (const nutrition in dvs) {
        dvs[nutrition] = 0;
        for (let i = 0; i < intakes.length; i++) {
            dvs[nutrition] += parseFloat(intakes[i][nutrition]);
        }
    };

    return (
        <div id="NutritionCard" className="flex flex-col bg-gray-50 rounded overflow-hidden shadow-lg mx-4 my-2 px-4 py-2">
            <div className="flex flex-row px-6 justify-center">
                <div className="font-bold text-gray-500 text-3xl mb-5">
                    NUTRITION
                </div>
            </div >
            <div className='flex flex-col items-center mb-5'>
                <ul className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-gray-200 w-2/5 text-gray-900">
                    {intakes.length &&
                        <div className='flex flex-col items-center mt-3 mb-5'>
                            <ul className="bg-white rounded-lg border border-gray-200 w-3/5  text-gray-900">
                                <li className='px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500
    focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
    transition
    duration-500'>
                                    <div className="flex flex-row items-end justify-end">
                                        <span className='text-lg font-bold'>% Daily value </span>
                                    </div>
                                </li>
                                {Object.keys(dvs).map((nutrition, index) => (
                                    <Nutrition nutrition={nutritions[nutrition]} dv={dvs[nutrition]} corrFactor={corrFactor} key={index} />
                                ))}
                            </ul>
                        </div>
                    }
                </ul>
            </div>
        </div>
    )
}
