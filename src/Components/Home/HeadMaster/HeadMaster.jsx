import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './HeadMaster.css';

const HeadMaster = () => {
    return (
        <Box flexGrow={1} sx={{ backgroundColor: '#C8E6B6' }}>
            <Container sx={{ py: 5 }}>
                <Typography variant='h6' component='div' sx={{ color: '#001E3C', textAlign: 'left', fontWeight: 900, mb: 3 }} className='headtitle'>
                    প্রধান শিক্ষকের বাণী --
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box className='headimg'>
                            <img style={{ width: '180px', height: '213px', border: '1px solid #001E3C', padding: '5px', borderRadius: '5px', textAlign: 'center' }} src="https://i.ibb.co/hgjHVv7/10-2.jpg" alt="HeadMaster" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }}>
                        <Typography variant='p' component='div' sx={{ textAlign: 'justify', ml: -25 }} className='headtext'>
                            বগুড়া জেলার এক সময়ের অবহেলিত জনপদ, যমুনা নদীর ভাঙ্গাগড়ার চিরন্তন সাক্ষী, ধুনটের প্রাণ কেন্দ্রে অবস্থিত, সৃজনশীল মানুষ গড়ার এক অনুকরণীয় মডেল, প্রতিভা বিকাশের শীর্ষে মাটিকোঁড়া নিবাসী নঈম উদ্দীন তালুকদার (এন.ইউ) আশীর্বাদপুষ্ট ঐতিহ্যবাহী বিদ্যাপীঠ ধুনট সরকারি এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয়। যেখানে অত্যন্ত মনোরম পরিবেশে তথ্য-প্রযুক্তির আদলে ছাত্র-ছাত্রীর লেখাপড়া, খেলাধুলা ও সাংস্কৃতিক অনুষ্ঠান আয়োজনে দীর্ঘদিন ধরে প্রশংসিত হয়ে আস্‌ছে। শিক্ষকমণ্ডলী তথা যাদের নিরলস প্রচেষ্টা ও সহযোগিতায় আমাদের এ বিদ্যালয়টি শ্রেষ্ঠ বিদ্যাপীঠ তথা সরকারি বিদ্যালয় হিসেবে স্থান করে নিয়েছে আমি তাদেরকে ধন্যবাদ জানাছি। ধুনটবাসীর তথা প্রশাসনিক সহযোগিতা অব্যাহত থাকলে আমাদের বিদ্যালয় একদিন সত্যিকার অর্থেই বগুড়া জেলার শ্রেষ্ঠ বিদ্যাপীঠ হিসেবে স্থান করে নিবে বলে আমার বিশ্বাস।
                            <Box sx={{ textAlign: 'right', mt: 3 }}>
                                <Typography variant='p' component='div' sx={{ textAlign: 'right' }}>
                                    মোঃ তফিজ উদ্দীন প্রাং<br />
                                    প্রধান শিক্ষক(ভারপ্রাপ্ত)<br />
                                    ধুনট সরকারি এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয়, ধুনট বগুড়া।
                                </Typography>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default HeadMaster;