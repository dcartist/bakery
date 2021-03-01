import React, {useEffect, useState} from 'react'
import Cupcake from "../Assets/cupcake.jpg"
import axios from 'axios'

export default function DishDisplay ()
{
    const [data, setdata]=useState( [] )
    const [dataResults, setReults]=useState( [] )
    const [searched, setSearch]=useState( '' )
    const [wasSearch, setWasSearch]=useState(false)
    useEffect( () =>
    {
        axios
            .get( `${process.env.REACT_APP_API_CAT}` )
            .then( ( res ) =>
            {
                setdata( res.data.meals )
            } )
            .catch( ( err ) => console.log( err ) );
    }, [] );
    function search ( e )
    {   if (wasSearch == false && e.target.value.length !== 0) {
        setWasSearch(true)
    }  else if (e.target.value.length !== 0){
        setWasSearch(true)
    }
    else {
        setWasSearch(false)
    }
        e.preventDefault()
        setReults( data.filter( info => !info.idMeal.includes( "52891" ) ).filter( searchResults => searchResults.strMeal.toLowerCase().match( e.target.value.toLowerCase() ) ) )
        console.log( dataResults.length )
    }

    if ( wasSearch === false )
    {
        return (
            <section>
                <div className="dishSearch">
                    <input type="text" onChange={search} placeholder="Search by name"></input>
                    {searched}
                </div>
                <div className="dishesDisplay">
                    {data.filter( info => !info.idMeal.includes( "52891" ) ).map( ( item, index ) => ( <div key={index}><h3>{item.strMeal}</h3> <img src={item.strMealThumb} alt={item.strMeal}></img></div> ) )}
                </div>
            </section>
        )
    } else
    {
        if ( dataResults.length==0 )
        {
            return (
                <section>
                    <div className="dishSearch">
                        <input type="text" onChange={search} placeholder="Search by name"></input>
                    </div>
                   <div className="noResults">
                       <h2>Sorry there are no results for your search, but here's a cupcake!!</h2>
                       <img src={Cupcake} alt="cupcake"/>
                   </div>
                </section>
            )
        } else
        {
            return (
                <section>
                    <div className="dishSearch">
                        <input type="text" onChange={search} placeholder="Search by name"></input>
                    </div>
                    <div className="dishesDisplay">
                        {dataResults.map( ( item, index ) => ( <div key={index}><h3>{item.strMeal}</h3> <img src={item.strMealThumb} alt={item.strMeal}></img></div> ) )}

                    </div>
                </section>
            )
        }

    }

}
