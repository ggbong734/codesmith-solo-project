import React from 'react'

export const SettingsModal = ({ setting, setSetting }) => {
    const [gender, age, activity] = setting;

    const saveSetting = () => {
        const getSelectedOption = (radioGroupName) => {
            const options = document.querySelectorAll(`input[name="${radioGroupName}"]`);
            for (const option of options) {
                if (option.checked) {
                    return option.value
                }
            }
        }
        const gender = getSelectedOption("genderOptions");
        const age = getSelectedOption("ageOptions");
        const activity = getSelectedOption("activityOptions");
        fetch(`http://localhost:3000/setting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "gender": gender, "age": age, "activity": activity }),
        })
            .then(res => res.json())
            .then(data => {
                setSetting([data.gender, data.agegroup, data.activity]);
            })
            .catch(err =>
                console.log(err)
            )
    }

    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="settingsModal" tabIndex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="settingsModalLabel">User Settings <span className='text-md'>(current settings are checked)</span></h5>
                        <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <div>
                            <p className='pt-4 pb-2 ml-4 font-bold'>Gender</p>
                            <div className="flex justify-center">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio" name="genderOptions" id="MaleRadio" value="Male" defaultChecked={gender === "Male"} />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="Male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio" name="genderOptions" id="FemaleRadio" value="Female" defaultChecked={gender === "Female"} />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="Female">Female</label>
                                </div>
                            </div>
                            <p className='pt-6 pb-2 ml-4 font-bold text-xl'>Age Group</p>
                            <div className="flex justify-center">
                                <div>
                                    <div className="form-check py-0.5">
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio" name="ageOptions" id="age4-8Radio" value="4-8" defaultChecked={age === "4-8"} />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="4-8">
                                            4-8
                                        </label>
                                    </div>
                                    <div className="form-check py-0.5">
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio" name="ageOptions" id="age9-13Radio" value="9-13" defaultChecked={age === "9-13"} />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="9-13">
                                            9-13
                                        </label>
                                        <div className="form-check py-0.5">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="ageOptions" id="age14-18Radio" value="14-18" defaultChecked={age === "14-18"} />
                                            <label className="form-check-label inline-block text-gray-800" htmlFor="14-18">
                                                14-18
                                            </label>
                                        </div>
                                        <div className="form-check py-0.5">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="ageOptions" id="age19-30Radio" value="19-30" defaultChecked={age === "19-30"} />
                                            <label className="form-check-label inline-block text-gray-800" htmlFor="19-30">
                                                19-30
                                            </label>
                                        </div>
                                        <div className="form-check py-0.5">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="ageOptions" id="age31-50Radio" value="31-50" defaultChecked={age === "31-50"} />
                                            <label className="form-check-label inline-block text-gray-800" htmlFor="31-50">
                                                31-50
                                            </label>
                                        </div>
                                        <div className="form-check py-0.5">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="ageOptions" id="age51+Radio" value="51+" defaultChecked={age === "51+"} />
                                            <label className="form-check-label inline-block text-gray-800" htmlFor="51+">
                                                51+
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='py-4 ml-4 font-bold'>Activity Level</p>
                            <div className="flex justify-evenly">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio" name="activityOptions" id="SedentaryRadio" value="Sedentary" defaultChecked={activity === "Sedentary"} />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="Sedentary">Sedentary</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio" name="activityOptions" id="ModeratelyActiveRadio" value="Moderately Active" defaultChecked={activity === "Moderately Active"} />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="Moderately Active">Moderately Active</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio" name="activityOptions" id="ActiveRadio" value="Active" defaultChecked={activity === "Active"} />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="Active">Active</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" className="px-6
          py-2.5
          bg-purple-500
          text-white
          font-medium
          text-lg
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-600 hover:shadow-lg
          focus:bg-purple-600 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-700 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="px-6
      py-2.5
      bg-blue-500
      text-white
      font-medium
      text-lg
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-600 hover:shadow-lg
      focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-700 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                            onClick={() => saveSetting()}
                            data-bs-dismiss="modal"
                        >Save settings</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
