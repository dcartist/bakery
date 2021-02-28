import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function DishDisplay() {
    const [data, setdata] = useState([])
    	useEffect(() => {
            axios
            .get(`${process.env.REACT_APP_API_CAT}`)
            .then((res) => {
                setdata(res.data.meals)
            })
            .catch((err) => console.log(err));
	 }, []);
    return (
        <div className="dishesDisplay">
            {data.filter(info => !info.idMeal.includes("52891")).map((item, index)=>(<div key={index}><h3>{item.strMeal}</h3> <img src={item.strMealThumb} alt={item.strMeal}></img></div>))}
            
        </div>
    )
}
