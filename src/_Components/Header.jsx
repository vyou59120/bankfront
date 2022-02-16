import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { positions } from '@mui/system';
import { FaBeer, FaBell, FaUser } from 'react-icons/fa';



export default function Header() {

    
    

    return (
         <div className='headerContainer'>
             <div className='headerBody'>
             <h2 className='headerTitle'>Header</h2>
             <div  className='userAvatarcontainer'><p className='NameClient'>Marcel Patulacci</p><FaUser/>
             
             

                 </div>
             </div>
         </div>
        ) 
}