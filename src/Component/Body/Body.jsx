import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Body.css';
import  TableTransaction  from '../../Component/TableTransactions/TableTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Histogramme } from '../../_Components/Histogramme/Histogramme';


export default function Body() {

    
    

    return (
        <div id='bodyContainer'>
            <div id='bodyPage'>

                <div id='tableContainer'>
                   
                        <TableTransaction/>

                    

                </div>
                <div id='tableHisto'>
                <Histogramme/>
                </div>
            </div>
        </div>
        ) 
}