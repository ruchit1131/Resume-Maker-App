import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Header() {
    return (
        <header style={header_}>
            <h1>FIVE MINUTE RESUME</h1><br/>
            <Link to="/" style= {LinkStyle}>HOME</Link>  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;     <Link to="/about" style= {LinkStyle}>ABOUT</Link><br/><br/>
        </header>
    )
}


const LinkStyle = {
    color: "#fff",  
    textDecoration: 'none',
    fontSize: '16px'
}

const header_ = {
    backgroundColor:"#333",
    color: "#fff",
    textAlign: 'center',
    padding: "10px",
}