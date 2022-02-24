import React, { useState, useEffect } from 'react';
import "./DashboardClient.css"
import NestedList from '../Component/MenuLateral/MenuLateral'
import EnhancedTable from '../Component/TableTransactions/TableTransactions'
import { Histogramme } from '../Component/Histogramme/Histogramme'
import Camembert from '../Component/PieChart/PieChart'
import Solde from '../Component/Solde/Solde'
import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';
import { getDialogActionsUtilityClass } from '@mui/material';




function DashboardClient() {

    const { state } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(null);
    const [revenus, setRevenus] = React.useState(null);
    const [depenses, setDepenses] = React.useState(null);
    
    useEffect(() => {
        getData();
        //getRevenus();
        //getDepenses();
    }, [])

    const getData = () => {

        accountService.getById(state['user']['id'])
            .then(
                data => {
                    setAccount(data)
                    getRevenus(data[0]['accounts'][0]['accountid']);
                    getDepenses(data[0]['accounts'][0]['accountid']);
                },
                error => {
                    console.log(error)
                }
            );
    }

    const getRevenus = (accountid) => {

        transactionsService.getByCredit(accountid)
            .then(
                data => {
                    setRevenus(data)
                    console.log(account)
                   /* getDepenses(account[0]['accounts'][0]['accountid']);*/
                },
                error => {
                    console.log(error)
                }
            );
    }

    const getDepenses = (accountid) => {

        transactionsService.getByDebit(accountid)
            .then(
                data => {
                    setDepenses(data)
                },
                error => {
                    console.log(error)
                }
            );
    }

    return (
        <div className='dashboardClient' >
            <NestedList className='menuContainer'/>
            <div className='mainContainer' id='mainContainer'>
                <div className='ClientStats' >
                    {account && <Histogramme data={account} />}
                    {account && <Solde solde={account[0]['accounts'][0]['solde']} />}
                    {revenus && <Camembert data={revenus} titre={"Revenus"} />}
                    {depenses && <Camembert data={depenses} titre={"Dépenses"} />}
                </div>
                {/*<EnhancedTable className='tableContainer' />*/}
            </div>
            
            
        </div>
    )
}

export { DashboardClient };