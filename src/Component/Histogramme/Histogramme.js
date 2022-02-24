import React, { useState, useEffect, PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from "recharts";
import { transactionsService } from '../../Services/transaction_services';
import { accountService } from '../../Services/account_services';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Histogramme.css'
import Card from '@mui/material/Card';
import { AuthContext } from '../../Context/Context'

function mappArray(array) {
    
    let newArray =[];
    let tabTemp = [];

    for (let i = 0; i < array.length; i++) {
        let debit = 0;
        let credit = 0;
        let mois = array[i]["month"];
        
        if (tabTemp.includes(mois) == false) {
            tabTemp.push(mois);

            if (array[i]["operation"] == "debit") {
                debit = -1 * parseFloat(array[i]["montant"]).toFixed(2);
            } else {
                credit = parseFloat(array[i]["montant"]).toFixed(2);
            }

            for (let j = i + 1; j < array.length; j++) {
                if (array[j]["month"] == mois) {
                    if (array[j]["operation"] == "debit") {
                        debit = -1 * parseFloat(array[j]["montant"]).toFixed(2);
                    } else {
                        credit = parseFloat(array[j]["montant"]).toFixed(2);
                    }
                }
            }

            let vartemp = {
                name: mois,
                debit: debit,
                credit: credit,
                amt: 2400
            };

            newArray.push(vartemp);
        }
 
    }
    
    return newArray;

}

function Histogramme(props) {
    
    /*console.log(props.data[0]['account'][0]['accountid'])*/
    const { state } = React.useContext(AuthContext);

    useEffect(() => {
        /* getAccount(state['user']['id']);*/
        console.log(props.data[0]['accounts'][0]['accountid'])
        getData();
    }, [])

    //const getAccount = (userid) => {

    //    accountService.getById(userid)
    //        .then(
    //            data => {
    //                setaccountId(data[0]['accounts'][0]['accountid'])

    //            },
    //            error => {
    //                console.log(error)
    //            }
    //        );
    //}

    const getData = () => {

        transactionsService.getByMonth(props.data[0]['accounts'][0]['accountid'])
            .then(
                data => {
                    let transactions = mappArray(data);
                    setData(transactions) 

                },
                error => {
                    console.log(error)
                }
            );
    }

    const [data, setData] = React.useState([]);
    const [accountId, setaccountId] = React.useState(0);

    return (

        <Card className="histogramme">
            <div className="titleHisto" id='titleHisto' >Balance</div>

      
            <div id="histoContainer">
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 50,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/*<Legend />*/}
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="credit" fill="#28a745" />
                <Bar dataKey="debit" fill="#DC3545" />
            </BarChart>
            </div>
        </Card>
    );
}

export { Histogramme };