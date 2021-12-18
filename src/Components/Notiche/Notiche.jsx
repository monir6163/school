import React, { useRef } from 'react';
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import { Link } from 'react-router-dom';
import './Notiche.css';
import { Typography } from '@mui/material';

const Notiche = () => {
    const ref = useRef();
    return (
        <>
            <Typography variant='h6' component='div' sx={{ color: '#001E3C', fontWeight: 900, mb: 3, mt: 3, textAlign: 'center' }}>
                নোটিশ বোর্ড
            </Typography>
            <div id="nt-example1-container">
                <i className="fa fa-arrow-up"
                    id="nt-example1-prev"
                    onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }} />
                <NewsTicker
                    ref={ref}
                    id="nt-example1"
                    direction={Directions.DOWN}
                    rowHeight={100}
                    maxRows={3}
                    duration={2000}>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>1.</span> There are no articles in this category. If subcategories display on this page, they may have articles. <Link to=''>Read More</Link></div>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>2.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>3.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>4.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>5.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                    <div><span style={{ color: 'red', fontWeight: 'bold' }}>6.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                </NewsTicker>
                <i className="fa fa-arrow-down"
                    id="nt-example1-next"
                    onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }} />
            </div>
        </>
    );
};

export default Notiche;