import styled from 'styled-components';
import React from "react";

const HeaderDiv = styled.header`
    display:flex;
    justify-content: space-around;
    align-items: center;
    max-height: 45px;
`;

const NavStyle = styled.nav`
    display:flex;
    justify-content: space-around;
    width:20%;
`;

const H1Style = styled.h1`
    font-size: 44px; 
`;
function Header(props){
    
    return (
        <HeaderDiv>
            <H1Style>NASA Photo of the Day</H1Style>
            <NavStyle>
                <a href="../public/index.html">Home</a>
                <a href="#">About</a>
                <a href="www.nasa.gov">NASA</a>
            </NavStyle>
        </HeaderDiv>
    )
}

export default Header;