import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"
import map from "./map.png"
import { useLocation } from "react-router-dom";



function NavBar (){
    const location = {useLocation}
    console.log("+++",location.pathname)
    return(
        <div className={styles.navBar}>
            <div className={styles.hcDiv}>
                <img src={map} className={styles.img} alt="" />
                <NavLink className={styles.hc}  to="/home">HENRY COUNTRIES</NavLink>
            </div>
            <div className={styles.subNav}>
                <NavLink className={styles.nav1} to="/home">HOME</NavLink>
                <NavLink className={styles.nav2}  to="/Clocks" >CLOCKS</NavLink>
                <NavLink className={styles.nav3} to= "/about">CREATE TOURISTIC ACTIVITY</NavLink>
            </div>
          
          
        </div>
    )
}

export default NavBar