import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function DishDisplay() {
    const [data, setdata] = useState([])
    const [dataResults, setReults] = useState([])
    const [searched, setSearch] = useState('')
    	useEffect(() => {
            axios
            .get(`${process.env.REACT_APP_API_CAT}`)
            .then((res) => {
                setdata(res.data.meals)
            })
            .catch((err) => console.log(err));
	 }, []);
     function search(e){
         e.preventDefault()
         setReults(data.filter(info => !info.idMeal.includes("52891")).filter(searchResults => searchResults.strMeal.toLowerCase().match(e.target.value.toLowerCase())))
        console.log(dataResults.length)
     }

     if (search.length == 0){
        return (
            <section>
                <div>
                <input type="text" onChange={search}></input>
                {searched}
                </div>
                <div className="dishesDisplay">
                {data.filter(info => !info.idMeal.includes("52891")).map((item, index)=>(<div key={index}><h3>{item.strMeal}</h3> <img src={item.strMealThumb} alt={item.strMeal}></img></div>))}
            </div>
            </section>
        )
     } else {
         if (dataResults.length == 0){
            return (
                <section>
                    <div>
                    <input type="text" onChange={search}></input>
                    </div>
                    <div className="dishesDisplay">
                    <div> Sorry no Results</div>
                        
                   
                </div>
                </section>
            )
         } else {
            return (
                <section>
                    <div>
                    <input type="text" onChange={search}></input>
                    </div>
                    <div className="dishesDisplay">
                    {dataResults.map((item, index)=>(<div key={index}><h3>{item.strMeal}</h3> <img src={item.strMealThumb} alt={item.strMeal}></img></div> ))}
                   
                </div>
                </section>
            )
         }
       
     }
    
}
