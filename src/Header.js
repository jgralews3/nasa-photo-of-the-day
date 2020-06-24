import "./Header.css";
import React from "react";

function Header(props){
    
    return (
        <header>
            <h1>NASA Photo of the Day</h1>
            <nav>
                <a href="../public/index.html">Home</a>
                <a href="#">About</a>
                <a href="www.nasa.gov">NASA</a>
            </nav>
        </header>
    )
}

export default Header;