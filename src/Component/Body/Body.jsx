import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Body.css';
import  TableTransaction  from '../../Component/TableTransactions/TableTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Histogramme } from '../../_Components/Histogramme/Histogramme';


export default function Body() {

    
    

    return (
        <div id='bodyContainer' className='bodyContainer' >
            <div id='bodyPage' className='bodyPage'>

                <div id='tableContainer' className='bodyTransaction'>
                    <div id='table' className='transaction'>
                        <TableTransaction />

                    </div>

                </div>
                <div id='tableHisto' className='transaction'>
                <Histogramme></Histogramme>
                </div>
            </div>
        </div>
        ) 
}