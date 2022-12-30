import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { searchById } from "../../actions";




function CountryDetail(){
    const dispatch = useDispatch()
    const countryDeatil = useSelector((state)=> state.countriesById)
    const {Id} = useParams()
    
  
    useEffect(()=>{dispatch(searchById(Id))},[])

    
    return(
        <div>    
              <img src={countryDeatil.flag} alt="" />
              <h1>Name: {countryDeatil.name}</h1>
              <h2>Code: {countryDeatil.id}</h2>
              <h2>Capital: {countryDeatil.capital}</h2>
              <h2>Continent: {countryDeatil.continent}</h2>
              <h2>Subregion: {countryDeatil.subregion}</h2>
              <h2>Population: {new Intl.NumberFormat('es-MX').format(countryDeatil.population)}</h2>
              <h2>Area: {new Intl.NumberFormat('es-MX').format(countryDeatil.area) } km²</h2>
              <div>{countryDeatil.activities?.map((activity)=>{
                    return(
                        <div>
                            <h3>{activity.name}</h3>
                            <img src={activity.img} alt="" />
                            <h3>Difficulty: {activity.difficulty}</h3>
                            <h3>Duration: {activity.duration} hour</h3>
                            <h3>Season :{activity.season}</h3>
                            <p>Description: {activity.description}</p>

                        </div>
                     )
                     })
                  }
              </div>      
        </div>
    )
}


export default CountryDetail