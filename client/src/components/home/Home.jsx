import React from "react";
import {getCountries, filterByContinent, filterByname, searchByname, filterByActivity, } from "../../actions";
import {useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react";
import Cards from "../cards/Cards";
import Paginado from "../paginado/Paginado";
import styles from "./Home.module.css"
import Filter from "../filters/Filters";


function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getCountries())},[])
    const allCountries = useSelector((state)=> state.countries)

    const [pagNum, setPagNum] = useState(1)
    const [pagOrder, setPagOrder] = useState(false)
    const [countriesPerPag, ] = useState(12)
    const idxLastCountry = pagNum * countriesPerPag 
    const idxFirstCountry = idxLastCountry - countriesPerPag 
    const selectCountriesPerPag = allCountries.slice(idxFirstCountry, idxLastCountry)
  
    const paginado = (pagNum) =>{
        setPagNum(pagNum)  
    }

    function handleInput(event){
        setTimeout(function(){
            if(event.target.value > Math.ceil(allCountries.length/countriesPerPag) || event.target.value < 1 ){return}
            setPagNum(parseInt(event.target.value) )
        }, 400);       
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
    
    function handleFilterByActivity(event){ 
        dispatch(filterByActivity(event.target.value))
        setPagNum(1)
    }

    return(
        <div className={styles.filter}>
            <div className={styles.filter2}>
                <Filter
                    handleFilter={handleFilter}
                    handleFilterByName={handleFilterByName}
                    handleSearchByName={handleSearchByName}
                    handleFilterByActivity={handleFilterByActivity}
                />
                <Paginado 
                    allCountries={allCountries.length}
                    countriesPerPag={countriesPerPag}
                    paginado={paginado}
                    pagNum={pagNum}
                />
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