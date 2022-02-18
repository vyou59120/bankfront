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

function mappArray(array) {
    
    let newArray =[];
    let tabTemp = [];

    for (let i = 0; i < array.length; i++) {
        let debit = 0;
        let credit = 0;
        let mois = array[i]["month"];
        
        console.log(tabTemp.includes(mois))
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
                uv: debit,
                pv: credit,
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
                    console.log(data)
                    //let transactions = data;
                    //transactions.map(function (transaction) {
                    //    return {
                    //        name: transaction.Month,
                    //        uv: transaction.montant,
                    //        pv: transaction.montant,
                    //        amt: 2100                          
                    //    }
                    //});
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
        <div className="App">
            "Soldes des 6 derniers mois"
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export { Histogramme };