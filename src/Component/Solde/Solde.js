import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Solde.css';
import EuroIcon from '@mui/icons-material/Euro';

export default function Solde(props) {
    return (
        <Card className="solde">
            <div className="titleSolde">SOLDE</div>
            <CardContent className="contentSoldes">
                <Typography variant="h5" component="div">
                    {props.solde} euros
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button size="small">Learn More</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}