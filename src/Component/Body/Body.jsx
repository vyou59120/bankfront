import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Body.css';
import  TableTransaction  from '../../Component/TableTransactions/TableTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function Body() {

    
    

    return (
         <div id='bodyContainer' className='bodyContainer' >
             <div className='BodyPage'>
             
             <div id='tableContainer'className='bodyTransaction'>
                 <div id='table' className='transaction'>
                 <TableTransaction  />

                 </div>
                  

             </div>

             </div>
         </div>
        ) 
}