import React from "react"
import {Link} from "react-router-dom"
import styles from "./Cards.module.css"
import americas from './img/amaricas.png'
import africa from './img/africa.png'
import atarctic from './img/antartida.png'
import europe from './img/europe.png'
import asia from './img/asia.png'
import oceania from './img/oceania.png'


function Cards(props){
    
    return(
        <div className={styles.cards}>
             {props.selectCountriesPerPag?.map((countrie)=>{
                return(
                    <Link to={`/infocountry/${countrie.id}`} key={countrie.id} className={styles.card}>
                        <h1 className={styles.textName}>{countrie.name}</h1>
                        <img src={countrie.flag} alt="" className={styles.image}/>
                        <h4 className={styles.textContinent}>{countrie.continent}</h4>
                        
                        {countrie.continent === 'Americas'? <img className={styles.imageContinent} src={americas} />: null }
                        {countrie.continent === 'Africa'? <img className={styles.africaImg} src={africa} />: null }
                        {countrie.continent === 'Antarctic'? <img className={styles.antarcticImg} src={atarctic} />: null }
                        {countrie.continent === 'Europe'? <img className={styles.euImg} src={europe} />: null }
                        {countrie.continent === 'Asia'? <img className={styles.asiImg} src={asia} />: null }
                        {countrie.continent === 'Oceania'? <img className={styles.imageContinent} src={oceania} />: null }
                        
                        
                    </Link>  
                )
            })}

        </div>
    ) 
}

export default Cards