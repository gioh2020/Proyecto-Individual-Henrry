import React from "react";
import { useState } from "react";
import styles from "./Filter.module.css"
import { useSelector} from "react-redux";




function Filter(props){
    
    const country = useSelector(state => state.countries);
    const [countryName, setCountryName] = useState('')
    
    const elements = [];

    country.forEach(element =>
    element.activities?.forEach(elementss => {
        if (!elements.includes(elementss.name)) {
        elements.push( elementss.name );
        }
    })
    );

    const handleInput = (event) =>{
    setCountryName(event.target.value)
    }
   

    return(
        <div className={styles.filter}>



            <input type="text" onChange={handleInput } placeholder="Search by name"/>
            <button onClick={()=> props.handleSearchByName(countryName)}>Search</button>
      
            <label htmlFor="">Filter By Continent</label>
            <select 
                className={styles.select1}
                onChange={e => props.handleFilter(e) }>
                <option value="All">----</option>
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
                <option value='reset'>-----</option>
                <option value="nameAz">A-Z</option>
                <option value="nameZa">Z-A</option>
                <option value="populationMax">Max-population</option>
                <option value="populationMin">Min-population</option>
            </select>

            <label>Activity</label>
            <select className={styles.select1} onChange={e => props.handleFilterByActivity(e)}>
                <option value="">-----</option>
                {elements?.map(el =>{
                    return(
                        <option value={el}>{el}</option>
                    )
                    
                })}
            </select>
            
        </div>
    )

}
export default Filter