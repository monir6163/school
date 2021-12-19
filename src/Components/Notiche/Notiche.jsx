import React from 'react';
import './Notiche.css';
import { Container, Typography } from '@mui/material';

const Notiche = () => {
    return (
        <>
            <Container>
                <Typography variant='h6' component='div' sx={{ color: '#001E3C', fontWeight: 900, mb: 3, mt: 3, textAlign: 'center' }}>
                    নোটিশ বোর্ড
                </Typography>
                <div className='notich-box'>
                    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                    <marquee behavior="scroll" direction="up" scrollamount='3px' onMouseOver='this.stop()' onMouseOut='this.start()'>
                        <ul>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                        </ul>
                    </marquee>
                </div>
            </Container>
        </>
    );
};

export default Notiche;