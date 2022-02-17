import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Body.css';
import  EnhancedTable  from '../../Component/TableTransactions/TableTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function Body() {

    
    

    return (
         <div className='bodyContainer' >
             <div className='BodyPage'>
             <h2 className='bodyTitle'>Transaction</h2>
             <div className='bodyTransaction'>
                 <div className='transaction'>
                 <EnhancedTable />

                 </div>
                  

             </div>

             </div>
         </div>
        ) 
}