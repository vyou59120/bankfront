import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '@mui/material/Button';



export default function NavBar() {

    
    

    return (
         <div id='navbarContainer' className='navbarContainer'>
             <div className='navbarBody'>
             <h2 className='navbarTitle'>Compte/Contrat</h2>
             <Button id="bouttonPDF" variant="contained">Imprimer PDF</Button>

             </div>
         </div>
        ) 
}