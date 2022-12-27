import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../Assets/images/img1.png'
import img2 from '../../../Assets/images/img2.png'
import img3 from '../../../Assets/images/img3.png'
import img4 from '../../../Assets/images/img4.png'
import './HeroSlider.css'

const HeroSlider = () => {
    const slider = [
        {
            id: 1,
            img: img1,
            title: 'Enough spaces'
        },
        {
            id: 2,
            img: img2,
            title: "Auto alert system"
        },
        {
            id: 3,
            img: img3,
            title: "24/7 Monitoring with CCTV"
        },
        {
            id: 4,
            img: img4,
            title: 'Using Modern Technology'
        },
    ]
    return (
        <Carousel className='main-slider' showArrows={true} autoPlay={true} infiniteLoop={true}>
            {
                slider?.map(slide => <div
                    key={slide.id}
                >
                    <img className='h-[500px] rounded-md' src={slide.img} alt="images.jpg" />

                    <p className="legend">{slide.title}</p>
                </div>)
            }
        </Carousel>
    );
};

export default HeroSlider;