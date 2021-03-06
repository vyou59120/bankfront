import React, { useState, useEffect } from 'react';
import NestedList from '../Component/MenuLateral/MenuLateral'
import Container from '@mui/material/Container';
import { accountService } from '../Services/account_services';
import { AuthContext } from '../Context/Context'
import { transactionsService } from '../Services/transaction_services';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function IBANRIB() {

    const { state } = React.useContext(AuthContext);
    const [nom, setNom] = React.useState(null);
    const [account, setAccount] = React.useState(null);

    var min = 12345;
    var max = 17894;
    const codeBank = Math.floor(Math.random() * (max - min)) + min;
    
    var cleRIBmin = 24;
    var cleRIBmax = 66;
    const cleRIB = Math.floor(Math.random() * (cleRIBmax - cleRIBmin)) + cleRIBmin;
    
    

    useEffect(() => {
        getData();
        
    }, [])

    const getData = () => {

        accountService.getById(state['user']['id'])
            .then(
                data => {
                    setAccount(data)
                    setNom(data)
                },
                error => {
                    console.log(error)
                }
            );
    }

    const printDocument = (e, Inom) => {

        e.preventDefault();
        
        var PDFPrenom = state['user']['prenom'];
        var PDFnom = state['user']['nom'];

        const input = document.getElementById('textContainer');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 50, 20);
            // pdf.output('dataurlnewwindow');
            
            const DownloaDstr = "RIB_" + PDFPrenom + "_" + PDFnom;
            pdf.save(DownloaDstr);
          });
        
      }
        

    

    return (
        <div id='IBANRIB' >
            <NestedList className='menuContainer' />
            <div id="ibanContainer">
                
            
            
            
            
            <div id="textContainer">
            <hr/>
            
            <h2>RELEVE D'IDENTITE BANCAIRE</h2>
            <hr/>
            <h4 >TITULAIRE</h4> 
            {state && <p >M. {state['user']['prenom']} {state['user']['nom']}</p>}
            <h4>DOMICILIATION</h4> 
            {state && <p>{state['user']['adresse']} {state['user']['cp']} {state['user']['ville']}</p>}
            
            <hr/>
            

            <h4>CODE BANQUE</h4>
             <p>{codeBank}</p>
            <h4>CODE GUICHET</h4>
            <p>000{cleRIB}</p>

            <h4>NUMERO DE COMPTE</h4>{account && <p> 000{account[0]['accounts'][0]['numaccount']}</p>}
            <h4>CLE RIB</h4>
            <p>{cleRIB}</p>

            <hr/>

            <h4>IBAN</h4>
            {account && <p>FR59 {codeBank} 000{cleRIB} {account[0]['accounts'][0]['numaccount']} {cleRIB}</p>}
            <h4>CODE BIC /CODE SWIFT</h4>
            <p>VEROBANKFRTT765</p>
            <hr/>

            
            
            </div>
            <br/>
           <Button variant="contained" onClick={printDocument}>Imprimer RIB</Button>
            </div>
        </div>
    )
}

export  default IBANRIB;