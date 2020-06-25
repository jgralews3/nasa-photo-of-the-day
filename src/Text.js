import React from "react";
import styled from 'styled-components';

const TextP = styled.p`
    margin-left: 10%;
    max-width: 80%;`
function Text(props){
    
    return (
        <div>
            <TextP>{props.text}</TextP>
        </div>
    )
}

export default Text;