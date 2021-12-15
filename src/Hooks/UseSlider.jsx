import { useEffect, useState } from 'react';

const UseSlider = () => {
    const [slideImg, setSlideImg] = useState([]);
    useEffect(() => {
        fetch('./sliderdata.json')
            .then(res => res.json())
            .then(data => setSlideImg(data))
    }, [])
    return [slideImg];
};

export default UseSlider;