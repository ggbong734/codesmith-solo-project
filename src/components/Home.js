import React, { useState, useEffect } from 'react'
import { Sidebar } from './Sidebar';
import { Header } from './Header'
import { Container } from './Container';

export const Home = ({ username }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/setting`)
            .then(res => res.json())
            .then(data => {
                setSetting([data.gender, data.agegroup, data.activity]);
            })
            .catch(err =>
                console.log(err)
            )
        return () => {
        }
    }, [JSON.stringify(setting)]);

    // function getFoodInfo() {
    //     console.log('print env:', process.env.EDAM_API_ID);
    //     const params = {
    //         app_id: process.env.EDAM_API_ID,
    //         app_key: process.env.EDAM_API_KEY,
    //         nutrition_type: "logging",
    //         ingr: "1 cup of rice"
    //         // ingr: consum.quantity + " " + consum.unit + " " + consum.item
    //     };
    //     let url = "https://api.edamam.com/api/nutrition-data"
    //     url += "?" + (new URLSearchParams(params)).toString();
    //     return fetch(url)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    // }
    //<div onClick={() => getFoodInfo()} className='font-bold cursor-pointer text-gray-400'>Calorie Tracker</div>

    return (setting.length === 0 ? null :
        <div className='flex'>
            <Sidebar setting={setting} setSetting={setSetting} />
            <div className='w-screen'>
                <Header username={username} />
                <Container setting={setting} />
            </div>
        </div>
    )
}
