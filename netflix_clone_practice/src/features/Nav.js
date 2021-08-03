import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav(){
    const [show,handleShow]=useState(false);
    const transitionNavBar = () =>{
        if(window.srollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return () => window.removeEventListener('scroll',transitionNavBar)
    },[]);
    return(
        <div className={`nav ${show && nav__black}`} >
            <div className="nav__contents">
            <img src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png" 
            className='nav__logo'
            alt=""/>
            <img src="https://pbs.twimg.com/profile_images/442609731299844096/HKNtpUt-.png" 
            className='nav__avatar'
            alt="" />

            </div>
            
            <h1>This is the nav</h1>

        </div>
    )
}
