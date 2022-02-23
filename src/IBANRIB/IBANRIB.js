import React, { useState, useEffect } from 'react';

import NestedList from '../Component/MenuLateral/MenuLateral'

import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';

function IBANRIB() {

    const { state } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(null);

    useEffect(() => {

    }, [])

    

    return (
        <div id='IBANRIB' >
            <NestedList className='menuContainer' />
            <div id="ibanContainer">
                
            
            <h2>RELEVE D'IDENTITE BANCAIRE</h2>
            
            <p>Numero compte</p>

           
            </div>
        </div>
    )
}

export  default IBANRIB;