import React from "react";
import { useState } from "react";




function Filter(props){
    const [countryName, setCountryName] = useState('')


const handleInput = (event) =>{
    setCountryName(event.target.value)
}
   

    return(
        <div>
            <select onChange={e => props.handleFilter(e) }>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <select onChange={e => props.handleFilterByName(e)}>
                <option value={true}>-----</option>
                <option value="nameAz">A-Z</option>
                <option value="nameZa">Z-A</option>
                <option value="populationMax">Max-population</option>
                <option value="populationMin">Min-population</option>
            </select>

            <input type="text" onChange={handleInput } placeholder="Search by name"/>
            <button onClick={()=> props.handleSearchByName(countryName)}>Search</button>
            
        </div>
    )

}
export default Filter