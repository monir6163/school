import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import Notiche from '../../Notiche/Notiche';

const History = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h6' component='div' sx={{ color: '#001E3C', textAlign: 'left', fontWeight: 900, mb: 3 }}>
                            এক নজরে ধুনট সরকারি এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয়ের ইতিহাস
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{ width: '100%', height: '300px', border: '1px solid #001E3C', padding: '5px', borderRadius: '5px', textAlign: 'center' }} src="https://i.ibb.co/tYFt3zg/building-01.jpg" alt="school" />
                            <Typography variant='p' component='div' sx={{ textAlign: 'justify', mt: 2 }}>
                                বতর্মান ধুনট এই. এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয় ইতিকাহিনী হতে জানা যায় ১৯১২ সালে বতর্মান স্থানে প্রাথমিক ভাবে প্রতিষ্ঠিত হয়। ধুনট সরকার পাড়া নিবাসী গিরিশচন্দ্র সরকার প্রতিষ্ঠাতা শিক্ষক হিসেবে বিদ্যালয়টি প্রতিষ্ঠায় অগ্রণী ভূমিকা পালন করেন। পাশাপাশি এলাকার বিশেষ করে ধুনট সরকার পাড়ার কয়েকজন বিদ্যোৎসাহী ব্যক্তি সহ ধুনট সদর এলাকার আশেপাশে গ্রামের গণ্যমান্য ব্যক্তি ও সদরপাড়ার বাবু ‍যুধিষ্ঠির সাহার সহযোগিতায় বিদ্যালয়টি দাঁড় করানো হয় । পযা‍য়ক্রমে মডেল ফ্রি প্রাইমারি, এম –ই (মিডিল ইংলিশ) এরপর ১৯৪১ সালে ১৭ই জানুয়ারি ধুনট ডাক বাংলায় জনাব রজিব উদ্দিন এম.এল. এ বগুড়া- এর সভাপতিত্বে ইম –ই বিদ্যালয়কে এইচ-ই নাম করণের সিদ্ধান্ত গৃহীত হয় । যাকে ধুনট উচ্চ ইংরেজী বিদ্যালয় নামে অভিহিত করা হয়। এলাকার সমাজ সেবক ও দানবীর মাটিকোড়া নিবাসী নঈম উদ্দিন তালুকদার (এন. ইউ) প্রায় তিন একর ২০ শতাংশ ও নগদ ২০০০/- টাকা দান করে বিদ্যালয়ের ভৌত অবকাঠামো তৈরিতে সহযোগিতা করেন। ইতিপূর্বে বিদ্যালয়টি ১৫/০১/১৯৪৪ সালে কলিকাতা বিশ্ববিদ্যালয় কর্তৃক উচ্চ শিক্ষার অনুমতি পায়। বিদ্যালয়টি ধুনট নঈম উদ্দিন উচ্চ ইংরেজী নাম করণের জন্য অন্যান্য দাতা ও স্থানীয় গণ্যমান্য ব্যক্তিবর্গ যেমন- ১. বাবু নরেশচন্দ্র সরকার, ২. জগদীশ চন্দ্র সরকার, ৩. তমিজ উদ্দিন সরকার।
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='h6' component='div' sx={{ color: '#001E3C', fontWeight: 900, mb: 3, textAlign: 'center' }}>
                            ২০২২ শিক্ষাবর্ষে শিক্ষার্থী ভর্তি
                        </Typography>
                        <Typography variant='p' component='div' sx={{ color: '#001E3C', fontWeight: '500', textAlign: 'center', mb: 5 }}>
                            ধুনট সরকারী এন,ইউ পাইলট মডেল উচ্চ বিদ্যালয়ের ২০২২ শিক্ষাবর্ষে শিক্ষার্থী অনলাইন ভর্তির <br /> <span style={{ fontSize: '18px', fontWeight: 'bold' }}>ফলাফল
                                এর জন্য নিচের বাটনটি চাপুন।</span>
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/getresult' style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <Button variant="contained" sx={{ fontWeight: 900, mb: 5 }}>
                                    <MenuBookIcon />&nbsp; অনলাইন ভর্তি ২০২২ এর ফলাফল
                                </Button>
                            </Link>
                        </Box>
                        <Typography variant='h6' component='div' sx={{ color: '#001E3C', fontWeight: 900, mb: 3, textAlign: 'center' }}>
                            নোটিশ বোর্ড
                        </Typography>
                        <Notiche />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default History;