import "./Picture.css";
import React from "react";

function Picture(props){
    
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <img src={props.image} alt="NASA Picture of the Day" className="picture"></img>
            <div className="info">
                <p>Date: {props.date}</p>
                <p>Copyright: {props.copy}</p>
            </div>
        </div>
    )
}

export default Picture;