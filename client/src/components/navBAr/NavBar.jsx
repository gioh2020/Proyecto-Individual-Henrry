import React from "react";
import { Link } from "react-router-dom";


function NavBar (){
    return(
        <div>
            <ul>
                <Link to="/">home</Link>
                <Link to="/Clocks" >Clocks</Link>
                <Link to= "/about">about</Link>

            </ul>
        </div>
    )
}

export default NavBar