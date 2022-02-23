import React, { useState, useEffect } from 'react';
import "./DashboardCommercial.css"
import NestedList from '../Component/MenuLateral/MenuLateral'
import EnhancedTable from '../Component/TableTransactions/TableTransactions'
import ListeClients from '../Component/ListeClients/ListeClients'
import { Histogramme } from '../Component/Histogramme/Histogramme'
import Camembert from '../Component/PieChart/PieChart'
import Solde from '../Component/Solde/Solde'
import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';

function DashboardCommercial() {

    const { state } = React.useContext(AuthContext);


    useEffect(() => {

    }, [])



    return (
        <div className='dashboardClient' >
            <NestedList className='menuContainer' />
            <ListeClients />
        </div>
    )
}

export { DashboardCommercial};