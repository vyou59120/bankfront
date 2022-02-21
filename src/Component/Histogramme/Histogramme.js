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
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Histogramme.css'
import Card from '@mui/material/Card';

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

function Histogramme() {

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {

        transactionsService.getByMonth()
            .then(
                data => {
                    let transactions = mappArray(data);
                    console.log(transactions)
                    setData(transactions) 

                },
                error => {
                    console.log(error)
                }
            );
    }

    const [data, setData] = React.useState([]);

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
                <Bar dataKey="credit" fill="#69F85C" />
                <Bar dataKey="debit" fill="#ff3333" />
            </BarChart>
            </div>
        </Card>
    );
}

export { Histogramme };