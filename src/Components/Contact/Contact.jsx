import { Container, Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1, mb: 5, mt: 5 }}>
            <Container sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ color: '#001E3C', textAlign: 'center', fontWeight: '700' }}>
                    আপনার মতামত পাঠাতে চান ?
                </Typography>
                <Typography variant="h6" sx={{ color: '#001E3C', textAlign: 'center', fontWeight: '500', paddingTop: '12px', mb: 5 }}>
                    অন্য যে কোনও কিছু সম্পর্কে আপনার প্রশ্ন রয়েছে ? আমাদের দল আপনার সমস্ত প্রশ্নের উত্তর দিতে প্রস্তুত।
                </Typography>
                <Box sx={{ flexGrow: 1, backgroundColor: '#fff', p: 2, borderRadius: '5px' }}>
                    <form>
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Name" placeholder='Name' type='text' id="fullWidth" />
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Email" placeholder='Email' type="email" id="fullWidth" />
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Phone" placeholder='Number' type="number" id="fullWidth" />
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Subject" type="text" placeholder='Subject' id="fullWidth" />
                        <TextField sx={{ mb: 5 }}
                            fullWidth
                            required
                            label="Message"
                            type='text'
                            placeholder="Message"
                            multiline
                            rows={6}
                            rowsmax={6}
                        />
                        <Button type="submit" variant="contained">Send Message</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;