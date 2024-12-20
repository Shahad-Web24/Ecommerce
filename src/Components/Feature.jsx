import React, { useContext } from 'react'
import Chair from '../assets/featurePic.png'
import { apiData } from './ContextApi'
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "Red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Feature = () => {
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const data = useContext(apiData)

  return (
    <section className='py-16'>
         <div className="container mx-auto">
            <div className="">
                <h2 className='text-center font-josef text-[42px] font-bold py-[50px] text-[#1A0B5B]'>Featured Products</h2>
                <div className="">
                  <Slider {...settings}> 
                  {data.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div className="!w-[95%] shadow-lg mb-3">
                    <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB]">
                        <img src={item.thumbnail} alt="featurePic" />
                        <button className='text-center font-josef font-medium text-[14px] bg-[#08D15F] py-2 px-3 text-white'>View details</button>
                    </div>
                    <div className="text-center py-5">
                        <h3 className='font-josef text-Common font-bold text-[18px] pb-3'>{item.title}</h3>
                        <h5 className='font-josef text-[#151875]]  text-[14px]'>Code - Y523201</h5>
                        <p className='font-lato text-[14px] pt-3'>price-${item.price}</p>
                    </div>              
                  </div>
                  ))}
                  </Slider>
                </div>   
                     
            </div>
         </div>
    </section>
  )
}

export default Feature
