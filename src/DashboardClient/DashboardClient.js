import React, { useState, useEffect } from 'react';
import "./DashboardClient.css"
import { useNavigate } from "react-router-dom";
import NestedList from '../Component/MenuLateral/MenuLateral'
import EnhancedTable from '../Component/TableTransactions/TableTransactions'
import { Histogramme } from '../Component/Histogramme/Histogramme'
import Camembert from '../Component/PieChart/PieChart'
import Solde from '../Component/Solde/Solde'
import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';
import { Navigate } from 'react-router-dom';

function DashboardClient() {

    const { state } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(null);
    const [revenus, setRevenus] = React.useState(null);
    const [depenses, setDepenses] = React.useState(null);
    const navigate = useNavigate();
    console.log(state)
    useEffect(() => {
        getData();
        getRevenus();
        getDepenses();
    }, [])

    console.log(state['token'])
    const getData = () => {

        accountService.getById(state['user']['userid'])
            .then(
                data => {
                    console.log(data)
                    if (data[0]["accounts"].length == 0)
                    {
                        setAccount(null)
                        navigate('/Notfound')
                    }
                    else
                    {
                        setAccount(data)
                    }
                },
                error => {
                    console.log(error)
                    
                }
            );
    }

    const getRevenus = () => {

        transactionsService.getByCredit()
            .then(
                data => {
                    setRevenus(data)
                },
                error => {
                    console.log(error)
                }
            );
    }

    const getDepenses = () => {

        transactionsService.getByDebit()
            .then(
                data => {
                    setDepenses(data)
                },
                error => {
                    console.log(error)
                    navigate('/Notfound')
                }
            );
    }

    return (
        <div className='dashboardClient' >
            <NestedList className='menuContainer'/>
            <div className='mainContainer' id='mainContainer'>
                <div className='ClientStats' >
                    <Histogramme />
                    {account && <Solde solde={account[0]['accounts'][0]['solde']} />}
                    <Camembert data={revenus} titre={"Revenus"}/>
                    <Camembert data={depenses} titre={"Dépenses"}/>
                </div>
                {/*<EnhancedTable className='tableContainer' />*/}
            </div>
            
            
        </div>
    )
}

export { DashboardClient };