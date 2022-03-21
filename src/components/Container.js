import React, { useState, useEffect } from 'react'
import { CalorieCard } from './CalorieCard'
import { calIntakeNeeds } from '../const';
import { IntakeCard } from './IntakeCard';
import { NutritionCard } from './NutritionCard';
import { CalorieChart } from './CalorieChart';

export const Container = () => {
    const [intakes, setIntakes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [setting, setSetting] = useState(['Female', '19-30', 'Sedentary']);
    const [last7DaysCalories, setLast7DaysCalories] = useState([]);

    useEffect(() => {
        //     let isMounted = true;
        //     fetch(`http://localhost:3000/intake`)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             if (isMounted) {
        //                 setIntakes(data);
        //             }
        //         })
        //         .catch(err =>
        //             console.log(err)
        //         )
        //     fetch(`http://localhost:3000/intake/7days`)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             if (isMounted) {
        //                 setLast7DaysCalories(data);
        //             }
        //         })
        //         .catch(err =>
        //             console.log(err)
        //         )
        //     return () => {
        //         isMounted = false;
        //     }
        const last7 = [
            { date: '2022-03-20T07:00:00.000Z', sum: '749' },
            { date: '2022-03-19T07:00:00.000Z', sum: '1814' },
            { date: '2022-03-21T07:00:00.000Z', sum: '410' }
        ];
        setLast7DaysCalories(last7);
        const data = [{
            "id": 6,
            "quantity": 2,
            "unit": "cup",
            "item": "rice",
            "date": "2022-03-20T02:03:48.827Z",
            "ca": "3.510",
            "chocdf": "103.142",
            "chole": "0.000",
            "enerc_kcal": "70.200",
            "fasat": "3.081",
            "fat": "3.480",
            "fe": "17.333",
            "foldfe": "8.775",
            "k": "7.136",
            "mg": "32.500",
            "na": "0.163",
            "nia": "39.000",
            "p": "60.171",
            "procnt": "51.558",
            "ribf": "14.400",
            "thia": "22.750",
            "vitb6a": "43.500",
            "vitb12": "0.000",
            "vitc": "0.000",
            "vitd": "0.000",
            "zn": "41.127",
            "calories": 1404
        },
        {
            "id": 7,
            "quantity": 2,
            "unit": "cup",
            "item": "steamed rice",
            "date": "2022-03-20T02:04:48.327Z",
            "ca": "3.160",
            "chocdf": "29.672",
            "chole": "0.000",
            "enerc_kcal": "20.540",
            "fasat": "1.217",
            "fat": "1.361",
            "fe": "21.067",
            "foldfe": "76.630",
            "k": "2.353",
            "mg": "9.029",
            "na": "0.132",
            "nia": "29.151",
            "p": "19.411",
            "procnt": "17.001",
            "ribf": "3.160",
            "thia": "42.923",
            "vitb6a": "22.606",
            "vitb12": "0.000",
            "vitc": "0.000",
            "vitd": "0.000",
            "zn": "14.076",
            "calories": 410
        }];
        setIntakes(data);
    }, [intakes.length]);

    const calorieBudget = calIntakeNeeds[setting[0]][setting[1]][setting[2]];
    return (
        <div>
            <CalorieCard intakes={intakes} calorieBudget={calorieBudget} />
            <IntakeCard intakes={intakes} setIntakes={setIntakes} />
            <div>
                {intakes.length && <NutritionCard intakes={intakes} calorieBudget={calorieBudget} />}
            </div>
            <CalorieChart last7DaysCalories={last7DaysCalories} />
        </div>
    )
}
