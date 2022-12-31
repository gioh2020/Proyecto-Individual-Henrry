import React from "react";
import {getCharacters, filterByContinent, filterByname, searchByname } from "../../actions";
import {useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react";
import Cards from "../cards/Cards";
import Paginado from "../paginado/Paginado";
import styles from "./Home.module.css"
import Filter from "../filters/Filters";
import globo from "./globo2.png"


//  indice  0  1  2  3  4  5  6  7  8  9   10  11  12  13  14  15  16  17  18  19
// countri [1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21]
// pagN 1   0                              10   
// pagN 2                                  10                                      20
function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.countries)

    const [pagNum, setPagNum] = useState(1)
    const [pagOrder, setPagOrder] = useState(false)
    const [countriesPerPag, ] = useState(12)
    const idxLastCountry = pagNum * countriesPerPag // 1*10 = 10   2 * 10 = 20
    const idxFirstCountry = idxLastCountry - countriesPerPag // 20 - 10 = 10
    const selectCountriesPerPag = allCountries.slice(idxFirstCountry, idxLastCountry)
  
    // if(pagNum===1){
    //     setCountriesPerPag(9)
    // }else{
    //     idxFirstCountry = idxFirstCountry - 1
    // }


const paginado = (pagNum) =>{
    setPagNum(pagNum)
       
}
useEffect(()=>{dispatch(getCharacters())},[])


function handleInput(event){
    setTimeout(function(){
        if(event.target.value > Math.ceil(allCountries.length/countriesPerPag) || event.target.value < 1 ){return}
        setPagNum(parseInt(event.target.value) )
        event.target.value = '' 
    }, 900);
    
}

function handleClicck(event){
   if(event.target.name === 'back' && pagNum === 1){return}
   if(event.target.name === 'next' && pagNum === Math.ceil(allCountries.length/countriesPerPag) ){return}
   if(event.target.name === 'next'){
        setPagNum(pagNum + 1)
    }else{
        setPagNum(pagNum - 1)}
    
}
function handleFilter(event){ 
    dispatch(filterByContinent(event.target.value))
    setPagNum(1) 
 }
 const handleFilterByName =(event) => {
    dispatch(filterByname(event.target.value))
    setPagNum(1)
    setPagOrder(event.target.value)
    
}
function handleSearchByName(event){ 
    dispatch(searchByname(event))
    setPagNum(1)

 }
    return(
        <div className={styles.filter}>
            <div className={styles.filter2}>
            <Filter
                handleFilter={handleFilter}
                handleFilterByName={handleFilterByName}
                handleSearchByName={handleSearchByName}
            />
            
            <Paginado 
                allCountries={allCountries.length}
                countriesPerPag={countriesPerPag}
                paginado={paginado}
                
            />
            <img src={globo} alt=""  className={styles.img}/>
           
            </div>


            <div className={styles.cards}>
            <Cards selectCountriesPerPag = {selectCountriesPerPag} />
            </div>
           
            <div className={styles.paginado}>
                <button className={styles.nextBack}  name="back" onClick={handleClicck}>{"<<<"}</button>
                <h3>Pag <input className={styles.input} id="holis" type="number" placeholder={pagNum} onChange={handleInput}/> de {Math.ceil(allCountries.length/countriesPerPag)}</h3>
                <button className={styles.nextBack}   name='next' onClick={handleClicck}>{">>>"}</button>
            </div>
        </div>
        
    )
}

export default Home;