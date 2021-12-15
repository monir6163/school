import React from 'react';
import './Slider.css';
import UseSlider from '../../../Hooks/UseSlider';
// Import Swiper React components
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/modules/pagination/pagination.min.css';
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/lazy/lazy.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import SwiperCore, { EffectFade, Lazy, Autoplay, Pagination, Navigation } from 'swiper';
import { Box } from '@mui/material';
// install Swiper modules
SwiperCore.use([EffectFade, Lazy, Autoplay, Pagination, Navigation]);

const Slide = () => {
    const [slideImg] = UseSlider();

    return (
        <>
            <Swiper effect={'fade'} spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} style={{ height: '450px', width: '100%' }}>
                <Box>
                    {
                        slideImg.map(slide =>
                            <SwiperSlide key={slide.id}>
                                <img src={slide?.img} alt="" style={{ width: "100%", height: "100%" }} className="swiper-lazy" />
                            </SwiperSlide>
                        )
                    }
                </Box>
            </Swiper>
        </>
    );
};

export default Slide;