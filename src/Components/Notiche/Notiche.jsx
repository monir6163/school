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
                    <marquee direction="up" scrollamount='4px'>
                        <ul>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী ১২ এপ্রিল বিজ্ঞান বিভাগের পরীক্ষা</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আগামী ৩১ মার্চের মধ্যে সকল ফি পরিশোধ করতে হবে</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">স্কুলের ভিতর মোবাইল ব্যবহার করা সম্পূর্ণ নিষেধ</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">এই স্কুলের ডিজাইনটি ক্রয় করতে যোগাযোগ করুন : 01747706163</a>
                            </li>
                            <li>
                                <a href="https://mdmonir.netlify.app/">আমাদের শিক্ষা প্রতিষ্ঠানে আপনাদের স্বাগতম</a>
                            </li>
                        </ul>
                    </marquee>
                </div>
            </Container>
        </>
    );
};

export default Notiche;