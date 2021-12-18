import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#2EAE72' }}>
                <Toolbar className='topbar'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='' style={{ color: '#fff', lineHeight: '1' }}>
                            <FacebookIcon />
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="p">
                            <CallIcon sx={{ fontSize: '15px' }} />{" "}
                            <span style={{ fontSize: '14px' }}>+8801747706163</span>
                        </Typography>&nbsp;&nbsp;&nbsp;
                        <Typography variant="p">
                            <MailIcon sx={{ fontSize: '15px' }} />{" "}
                            <span style={{ fontSize: '14px' }}>monirhossain6163@gmail.com</span>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Topbar;