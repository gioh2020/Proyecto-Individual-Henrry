import React from "react";
import { useState } from "react";
import styles from "./Filter.module.css"




function Filter(props){
    const [countryName, setCountryName] = useState('')


const handleInput = (event) =>{
    setCountryName(event.target.value)
}
   

    return(
        <div className={styles.filter}>
            <input type="text" onChange={handleInput } placeholder="Search by name"/>
            <button onClick={()=> props.handleSearchByName(countryName)}>Search</button>
            <hr />
            <label htmlFor="">Filter By Continent</label>
            <select 
                className={styles.select1}
                onChange={e => props.handleFilter(e) }>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <label> Order</label>
            <select 
                className={styles.select1}
                onChange={e => props.handleFilterByName(e)}>
                <option value={true}>-----</option>
                <option value="nameAz">A-Z</option>
                <option value="nameZa">Z-A</option>
                <option value="populationMax">Max-population</option>
                <option value="populationMin">Min-population</option>
            </select>
            
        </div>
    )

}
export default Filter