import { Link } from "react-router-dom";
import React from "react";

function landingPage () {
    return(
        <div>
            <Link to= "/home">
                <button>HOME</button>
            </Link>
        </div>
    )

}


export default landingPage