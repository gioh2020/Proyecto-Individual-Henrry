import React from "react";
import styles from "./Paginado.module.css"


function Paginado({countriesPerPag,allCountries,paginado,pagNum}){
    const pageNumbs = []
    for(let i=1; i <= Math.ceil(allCountries/countriesPerPag); i++){
        pageNumbs.push(i)

    }
    
    return(
        <div className={styles.paginado2 }  >
            <ul className={styles.paginado}>
                {pageNumbs?.map(num=>{
                    return(
                        <li 
                        className={styles.cur} key={num}
                        onClick={()=> paginado(num)}>
                            {num===pagNum? <p className={styles.p}>{num}</p> : <p className={styles.p1}>{num}</p> }
                        </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Paginado