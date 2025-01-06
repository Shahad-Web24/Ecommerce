import React, { useContext } from 'react'
import Chair from '../assets/featurePic.png'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='w-10 h-10 rounded-full bg-[#FB2E86] absolute -bottom-12 left-[50%] z-20 flex items-center justify-center' onClick={onClick}><HiArrowNarrowRight className='text-white text-2xl' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='w-10 h-10 rounded-full bg-[#FB2E86] absolute -bottom-12 left-[45%] z-20 flex items-center justify-center' onClick={onClick}><HiArrowNarrowLeft className='text-white text-2xl' /></div>
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
                  <div className="!w-[95%] shadow-lg mb-3 group">
                    <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB] relative overflow-hidden">
                        <img src={item.thumbnail} alt="featurePic" />
                    <div className='cursor-pointer flex items-center absolute gap-3 top-4 -left-52 opacity-0    group-hover:left-5 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                      <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                      <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                      <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                    </div>
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
