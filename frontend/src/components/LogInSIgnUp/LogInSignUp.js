import React, { useState } from 'react';
import './Header.css'
import logo from "../Assets/logo.png";
import accountIcon from "../Assets/person.png";
import TabbedForm from './BsTabs'; 
const LogInSIgnUp=()=>{
    const [showForms,setShowForms]=useState(false);
    const toggleForms=()=>{
        setShowForms(!showForms);
    };

    return(
        <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Lo go"/>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li onClick={toggleForms}><a href="signin">
                        <i class="fa-solid fa-user"></i></a>
                    </li>
                </ul>
            </nav>
        </header>        
        <div className="forms-container show">
            <TabbedForm/>
        </div>
        </>

    )
}
export default LogInSIgnUp;