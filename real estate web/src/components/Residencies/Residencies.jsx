import React, { useRef } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { useState } from 'react'

function Residencies  () {
     const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <div>
            <div className="flexCenter search-bar"> 
                <input id='search' type='search' placeholder='Search Residencies' onChange={(Event) =>{
                    setSearchTerm(Event.target.value);
                    }}/>
            </div>
            </div>
            <br></br>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                data.filter((val) => {
                    if(searchTerm == ""){
                        return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                })
                    .map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                <img src={card.image} alt='home'/>

                                <span className='secondaryText r-price'>
                                    <span style={{color: "orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className=" flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};