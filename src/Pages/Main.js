import React from 'react'
import DishDisplay from "./DishDisplay"
import {Route} from "react-router-dom"

export default function Main() {

    return (
        <div className="main">
            <DishDisplay></DishDisplay>
        </div>
    )
}
