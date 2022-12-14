import React from "react";
import {getCharacters, filterByContinent} from "../../actions";
import {useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react";
import Cards from "../cards/Cards";
import Paginado from "../paginado/Paginado";
import styles from "./Home.module.css"
import Filter from "../filters/Filters";

//  indice  0  1  2  3  4  5  6  7  8  9   10  
// countri [1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20]
// pagN 1   0                              10   
// pagN 2                                  10                                  20
function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.countries)

    const [pagNum, setPagNum] = useState(1)
    const [countriesPerPag, setCountriesPerPag] = useState(12)
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

function handleClick(event){
    event.preventDefault()
    dispatch(getCharacters())
}
function handleInput(event){
    setTimeout(function(){
        if(event.target.value > Math.ceil(allCountries.length/countriesPerPag) || event.target.value < 1 ){return}
        setPagNum(parseInt(event.target.value) )
        event.target.value = ''
        
    }, 800);
    
}
function handleClicck(event){
    
   
   if(event.target.name == 'back' && pagNum === 1){return}
   if(event.target.name == 'next' && pagNum === Math.ceil(allCountries.length/countriesPerPag) ){return}
   if(event.target.name == 'next'){
        setPagNum(pagNum + 1)
    }else{setPagNum(pagNum - 1)}
    
}
function handleFilter(event){
    
    dispatch(filterByContinent(event.target.value))
    setPagNum(1)
    
 }

    return(
        <div>
            <h1>Este es el home</h1>
            <Filter handleFilter={handleFilter}></Filter>
            <button onClick={event=> {handleClick(event)}}>all Countries</button>
            <div className={styles.paginado}>
                <button name="back" onClick={handleClicck}>back</button>
                <h3>pag <input id="holis" type="number" placeholder={pagNum} onChange={handleInput}/> de {Math.ceil(allCountries.length/countriesPerPag)}</h3>
                <button name='next' onClick={handleClicck}>next</button>
            </div>
            <Paginado 
            allCountries={allCountries.length}
            countriesPerPag={countriesPerPag}
            paginado={paginado}
            />
            <Cards selectCountriesPerPag = {selectCountriesPerPag}
            />
           
        </div>
        
    )
}

export default Home;