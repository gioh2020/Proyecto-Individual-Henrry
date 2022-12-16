import React from "react";
import styles from "./Paginado.module.css"


function Paginado({countriesPerPag,allCountries,paginado}){
    const pageNumbs = []
    for(let i=1; i <= Math.ceil(allCountries/countriesPerPag); i++){
        pageNumbs.push(i)

    }

    return(
        <nav className={styles.paginado2}>
            <ul className={styles.paginado}>
                {
                    pageNumbs &&
                     pageNumbs.map(num=>{
                        return(
                        <li className={styles.cur}>
                            <a 
                            onClick={()=> paginado(num)} 
                            >{num}</a>
                        </li>
                        )
                     })
                }
            </ul>
        </nav>
    )
}

export default Paginado