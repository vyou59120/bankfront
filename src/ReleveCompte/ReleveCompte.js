import React, { useState, useEffect } from 'react';
import { Route, useParams } from "react-router-dom";
import "./ReleveCompte.css"
import NestedList from '../Component/MenuLateral/MenuLateral'
import EnhancedTable from '../Component/TableTransactions/TableTransactions'
import { Histogramme } from '../Component/Histogramme/Histogramme'
import Camembert from '../Component/PieChart/PieChart'
import Solde from '../Component/Solde/Solde'
import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';

function ReleveCompte() {

    const { state } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(null);
    const [revenus, setRevenus] = React.useState(null);
    const [depenses, setDepenses] = React.useState(null);
    let { id } = useParams();
    useEffect(() => {
       /* getData();*/
    }, [])

    //const getData = () => {

    ///*accountService.getById(state['user']['id'])*/
    //    accountService.getById(id)
    //        .then(
    //            data => {
    //                console.log(data)
    //                setAccount(data)
    //            },
    //            error => {
    //                console.log(error)
    //            }
    //        );
    //}

    return (
        <div className='dashboardClient' >
            <NestedList className='menuContainer' />
            <div className='mainContainer' id='mainContainer'>
                <div className='ClientStats' >
                    {/*<EnhancedTable id={state['user']['id']} className='tableContainer' />*/}
                    <EnhancedTable id={id} className='tableContainer' />
                </div>
            </div>


        </div>
    )
}

export { ReleveCompte };