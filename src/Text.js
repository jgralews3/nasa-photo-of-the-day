import "./Text.css";
import React from "react";

function Text(props){
    
    return (
        <div>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Text;