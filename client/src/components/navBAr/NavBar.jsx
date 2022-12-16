import React from "react";
import { Link,NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"


function NavBar (){
    return(
        <div >
            <ul className={styles.navBar}>
                <NavLink className={styles.ink} to="/">home</NavLink>
                <Link className={styles.ink} to="/Clocks" >Clocks</Link>
                <Link className={styles.ink} to= "/about">about</Link>

            </ul>
        </div>
    )
}

export default NavBar