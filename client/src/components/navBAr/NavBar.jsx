import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"
import map from "./map.png"



function NavBar (){
    return(
        <div className={styles.navBar}>
            <div className={styles.hcDiv}>
                <img src={map} className={styles.img} alt="" />
                <NavLink className={styles.hc}  to="/home">HENRY COUNTRIES</NavLink>
            </div>
          
                <NavLink className={styles.nav1} to="/home">HOME</NavLink>
                <NavLink className={styles.nav2}  to="/Clocks" >CLOCKS</NavLink>
                <NavLink className={styles.nav3} to= "/about">CREATE TURISTIC ACTIVITY</NavLink>
          
        </div>
    )
}

export default NavBar