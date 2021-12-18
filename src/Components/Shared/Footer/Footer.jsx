import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box flexGrow={1} sx={{ backgroundColor: '#2EAE72' }}>
            <Container sx={{ py: 2 }}>
                <Typography variant='p' component='div' sx={{ textAlign: 'center' }}>
                    কপিরাইট © ধুনট সরকারি এন ইউ পাইলট মডেল উচ্চ বিদ্যালয়. সর্বস্বত্ব সংরক্ষিত. <span style={{ color: '#fff' }}>
                        Developed by <a style={{ textDecoration: 'none', color: '#0F1637', fontWeight: 900 }} href="https://mdmonir.netlify.app/" target="_blank" rel="noopener noreferrer">Monir Hossain</a>
                    </span>
                </Typography>
            </Container>
        </Box >
    );
};

export default Footer;