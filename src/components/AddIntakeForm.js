import React, { useState } from 'react'

export const AddIntakeForm = ({ intakes, setIntakes }) => {

    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState('');
    const [item, setItem] = useState('');

    //TODO add intake form post to our backend
    const addIntake = () => {
        console.log('quantity', quantity);
        console.log('item', item);
        console.log('unit', unit);
        if (quantity && item) {
            console.log('in fetch add intake');
            fetch('http://localhost:3000/intake', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: quantity, unit: unit, item: item }),
            }).then(response => response.json())
                .then(data => {
                    setIntakes([...intakes, data])
                    document.getElementById('foodForm').value = '';
                    document.getElementById('quantityForm').value = '';
                    document.getElementById('unitForm').value = '';
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };


    return (
        <div id="AddIntakeForm" className="flex flex-row justify-center items-center w-full">
            <div className="mb-3">
                <input
                    type="text"
                    className="
        form-control
        w-48
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="foodForm"
                    placeholder="Steamed rice"
                    onChange={e => setItem(e.target.value)}
                />
                <div className="text-md text-gray-500 mt-1">Food</div>
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="
        form-control
        w-24
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="quantityForm"
                    placeholder="3"
                    onChange={e => setQuantity(e.target.value)}
                />
                <div className="text-md text-gray-500 mt-1">Quantity</div>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="
        form-control
        w-24
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="unitForm"
                    placeholder="cups"
                    onChange={e => setUnit(e.target.value)}
                />
                <div className="text-md text-gray-500 mt-1">Unit</div>
            </div>
            <button onClick={() => addIntake()}
                className="text-lg font-bold text-white py-3 px-2 ml-6 cursor-pointer border rounded-md border-gray-200 bg-blue-400 hover:bg-blue-600 hover:text-white
                focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-blue-600
                transition
                duration-500 ">Add Intake</button>
        </div>
    )
}
