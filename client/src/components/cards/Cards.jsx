import React from "react"
import {Link} from "react-router-dom"
import styles from "./Cards.module.css"
function Cards(props){
    
    return(
        <div className={styles.cards}>
             {props.selectCountriesPerPag?.map((countrie)=>{
                return(
                    <Link to="/pais" key={countrie.id} className={styles.card}>
                        <h1 className={styles.textName}>{countrie.name}</h1>
                        {/* <h2>{countrie.activities?.map((activity)=>{
                            return(
                                <h2>{activity.name}</h2>
                            )
                            })}
                        </h2> */}

                        <img src={countrie.flag} alt="" className={styles.image}/>
                        <h2>{countrie.continent}</h2>
                        
                    </Link>  
                )
            })}

        </div>
    ) 
}

export default Cards