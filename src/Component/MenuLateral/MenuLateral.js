import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AppsIcon from '@material-ui/icons/Apps';
import { shadows } from '@mui/system';
import { AuthContext } from '../../Context/Context'

export default function NestedList() {

    const { state } = React.useContext(AuthContext);
 
    const [listeClients, setListeClients] = React.useState(true);
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleReleve = () => {
        navigate('/ReleveCompte/' + state['user']['id'])
        setListeClients(false);
    };

    const handleDashboard = () => {
        navigate('/DashboardClient')
    };

    const handleIBAN = () => {
        navigate('/IBANRIB')
    };

    const handleClients = () => {
        navigate('/DashboardClient')
    };

    const handleCreateClient = () => {
        navigate('/DashboardClient')
    };

    const handleListeClients = () => {
        navigate('/DashboardCommercial')
    };

    return (
        <List
            sx={{ height:'100%', width: '100%', maxWidth: 230, bgcolor: 'background.paper', boxShadow: 3 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Menu
                </ListSubheader>
            }
        >
            {state['user']['role'] == "CLIENT" && <ListItemButton onClick={handleReleve}>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Relevé de compte" />
            </ListItemButton>}
            {state['user']['role'] == "CLIENT" && <ListItemButton onClick={handleDashboard}>
                <ListItemIcon>
                    <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>}
            {state['user']['role'] == "CLIENT" && <ListItemButton onClick={handleIBAN}>
                <ListItemIcon>
                    <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="IBAN/RIB" />
            </ListItemButton>}
            {(state['user']['role'] == "STAFF" || state['user']['role'] == "ADMIN") &&
             <ListItemButton onClick={handleListeClients}>
                <ListItemIcon>
                    <FormatListNumberedIcon />
                </ListItemIcon>
                <ListItemText primary="Liste Clients" />
            </ListItemButton>}
            {(state['user']['role'] == "STAFF" || state['user']['role'] == "ADMIN") &&
            <ListItemButton onClick={handleCreateClient}>
                <ListItemIcon>
                    <FormatListNumberedIcon />
                </ListItemIcon>
                <ListItemText primary="Créer Client" />
            </ListItemButton>}
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Conseiller" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Accueil" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}