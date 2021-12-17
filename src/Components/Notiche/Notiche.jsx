import React, { useRef } from 'react';
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import { Link } from 'react-router-dom';
import './Notiche.css';

const Notiche = () => {
    const ref = useRef();
    return (
        <div id="nt-example1-container">
            <i className="fa fa-arrow-up"
                id="nt-example1-prev"
                onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }} />
            <NewsTicker
                ref={ref}
                id="nt-example1"
                direction={Directions.UP}
                rowHeight={140}
                maxRows={2}
                duration={4000}>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minusLorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident porro ea minus <Link to=''>Read More</Link></div>
            </NewsTicker>
            <i className="fa fa-arrow-down"
                id="nt-example1-next"
                onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }} />
        </div>
    );
};

export default Notiche;