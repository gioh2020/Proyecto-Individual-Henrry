import {NavLink } from "react-router-dom";
import React from "react";
import style from "./LandingPage.module.css"
import World from './map.png'
import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'


function LandingPage () {
    return(
        <div className={style.father}>
  <div className={style.principalDiv}>
            <div className={style.container}>
               
                <div className={style.welcome}>
                    <h1 className={style.tittle}>Henry Countries</h1>
                    <h4 className={style.h4}>Find information about countries,continents, population,etc.
                        Create a touristic activities that do you want do to in diferents countries.</h4>
                    <NavLink to="/home">
        
                    <button className={style.button}> Get Started </button>
                    </NavLink>
        
                </div>
                <div className={style.sources}>
                    <img className={style.img}src={World} type="png"
                        alt="countries, countries_img, paises, continentes, mapamundi" />
                </div>
        
            </div>
            <div className={style.infoDiv}>
                <div className={style.featuresContainer}>
        
                    <div className={style.divs}>
                        <img className={style.icons} src={icon1} alt='icon1' />
                        <h4>Countries</h4>
                        <p>Information about Population, Continent, Alpha Code, Capital, Sub Region, Area and turistic
                            Activities.</p>
                    </div>
                    <div  className={style.divs}>
                        <img src={icon2} alt='icon1' />
                        <h4>Touristic activity</h4>
                        <p className={style.pAddTouristicActivity}>Create your own activity with a name, diffcult, season, description and
                            duration.</p>
                    </div>
                    <div className={style.divs}>
                        <img src={icon3} alt='icon1' />
                        <h4>Filter</h4>
                        <p>You can filter the countries by Continent, Name, Population, Area and Touristic Activity. </p>
                    </div>
                    <div className={style.divs}>
                        <img src={icon4} alt='icon1' />
                        <h4>Clocks</h4>
                        <p>You can see the differents world's clocks</p>
                    </div>
                </div>
            </div>
           
        </div>
            
        </div>
      
        )

}


export default LandingPage