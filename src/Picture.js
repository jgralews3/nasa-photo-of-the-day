import styled from 'styled-components';
import React from "react";

const ImageStyle = styled.img`
    max-width: 80%;
`;

const InfoStyle = styled.div `
    display: flex;
    justify-content: space-evenly;
`;

function Picture(props){
    
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <ImageStyle src={props.image} alt="NASA Picture of the Day" className="picture"></ImageStyle>
            <InfoStyle>
                <p>Date: {props.date}</p>
                <p>Copyright: {props.copy}</p>
            </InfoStyle>
        </div>
    )
}

export default Picture;