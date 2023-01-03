import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { searchById } from "../../actions";
import styles from "./CountryDetail.module.css"
import people from "./People.png"



function CountryDetail(){
    const dispatch = useDispatch()
    const countryDeatil = useSelector((state)=> state.countriesById)
    const {Id} = useParams()
    
  
    useEffect(()=>{dispatch(searchById(Id))},[])

    
    return(
        <div className={styles.principalDiv}>    
        <div className={styles.subDiv}>

              <img className={styles.flagDiv} src={countryDeatil.flag} alt="" />
        <div className={styles.infoDiv}>
              <h1>{countryDeatil.name}</h1>
              <h2>Code: {countryDeatil.id}</h2>
              <h2>Capital: {countryDeatil.capital}</h2>
              <h2>Continent: {countryDeatil.continent}</h2>
              <h2>Subregion: {countryDeatil.subregion}</h2>


              <div className={styles.imageDiv}>
              <h2>Population: {new Intl.NumberFormat('es-MX').format(countryDeatil.population)}</h2>
              <img className={styles.image} src={people} alt="" />
              </div>

              <h2>Area: {new Intl.NumberFormat('es-MX').format(countryDeatil.area) } km²</h2>
        </div >

        </div>
              <div className={styles.activitiesDiv}>{countryDeatil.activities?.map((activity)=>{
                console.log(typeof activity.description )
                    return(
                        <div className={styles.activityDiv}>
                            <div className={styles.back}>
                            <h3>{activity.name}</h3>
                            <img src={activity.img} className={styles.imageActivity} alt="" />
                            <h3>Difficulty: {activity.difficulty}</h3>
                            <h3>Duration: {activity.duration} hour</h3>
                            <h3>Season :{activity.season}</h3>
                            </div>

                            <div className={styles.front}>
                            <p className={styles.descriptionText}>Description: {activity.description}</p>
                            </div>

                        </div>
                     )
                     })
                  }
              </div>      
        </div>
    )
}


export default CountryDetail