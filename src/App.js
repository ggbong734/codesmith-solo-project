import React from 'react'

export const App = () => {

    function getFoodInfo() {
        console.log('print env:', process.env.EDAM_API_ID);
        const params = {
            app_id: process.env.EDAM_API_ID,
            app_key: process.env.EDAM_API_KEY,
            nutrition_type: "logging",
            ingr: "1 cup of rice"
            // ingr: consum.quantity + " " + consum.unit + " " + consum.item
        };
        let url = "https://api.edamam.com/api/nutrition-data"
        url += "?" + (new URLSearchParams(params)).toString();
        return fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div onClick={() => getFoodInfo()} className='font-bold cursor-pointer text-gray-400'>Calorie Tracker</div>
            <div className="border-b p-3 border-gray-100">
                <p className="text-3xl font-bold underline">Elrond eGold </p>
            </div>
        </div>
    )
}
