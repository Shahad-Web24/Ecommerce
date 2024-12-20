import React from 'react'
import TrendingProduct from '../assets/trendingProduct.png'
import DiscountPic from '../assets/discountPic.png'
import DiscountPicB from '../assets/discountPicB.png'
import DiscountPicC from '../assets/discountPicC.png'

const TrendingProducts = () => {
  return (
    <section className='py-16'>
         <div className="container mx-auto">
            <div className="">
                <h2 className='text-center font-josef text-[42px] font-bold pb-[50px] text-[#1A0B5B]'>Trending Products</h2>
                <div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-[23%] shadow-lg pt-3 px-3 mb-3">
                                <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB]">
                                    <img src={TrendingProduct} alt="featurePic" />
                                </div>
                                <div className="text-center pt-5 pb-8">
                                    <h3 className='font-josef text-[#151875] font-bold text-[18px]'>Cantilever chair</h3>
                                    <div className="flex items-center justify-center gap-3">
                                        <p className='font-lato text-[#151875] text-[12px]'>$26.00</p>
                                        <p className='font-lato text-red-600 text-[12px] line-through'>$42.00</p>
                                    </div>
                                </div>              
                        </div>

                        <div className="w-[23%] shadow-lg pt-3 px-3 mb-3">
                                <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB]">
                                    <img src={TrendingProduct} alt="featurePic" />
                                </div>
                                <div className="text-center pt-5 pb-8">
                                    <h3 className='font-josef text-[#151875] font-bold text-[18px]'>Cantilever chair</h3>
                                    <div className="flex items-center justify-center gap-3">
                                        <p className='font-lato text-[#151875] text-[12px]'>$26.00</p>
                                        <p className='font-lato text-red-600 text-[12px] line-through'>$42.00</p>
                                    </div>
                                </div>              
                        </div>

                        <div className="w-[23%] shadow-lg pt-3 px-3 mb-3">
                                <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB]">
                                    <img src={TrendingProduct} alt="featurePic" />
                                </div>
                                <div className="text-center pt-5 pb-8">
                                    <h3 className='font-josef text-[#151875] font-bold text-[18px]'>Cantilever chair</h3>
                                    <div className="flex items-center justify-center gap-3">
                                        <p className='font-lato text-[#151875] text-[12px]'>$26.00</p>
                                        <p className='font-lato text-red-600 text-[12px] line-through'>$42.00</p>
                                    </div>
                                </div>              
                        </div>

                        <div className="w-[23%] shadow-lg pt-3 px-3 mb-3">
                                <div className="flex flex-col items-center justify-center  pt-16 pb-5 bg-[#F6F7FB]">
                                    <img src={TrendingProduct} alt="featurePic" />
                                </div>
                                <div className="text-center pt-5 pb-8">
                                    <h3 className='font-josef text-[#151875] font-bold text-[18px]'>Cantilever chair</h3>
                                    <div className="flex items-center justify-center gap-3">
                                        <p className='font-lato text-[#151875] text-[12px]'>$26.00</p>
                                        <p className='font-lato text-red-600 text-[12px] line-through'>$42.00</p>
                                    </div>
                                </div>              
                        </div>                 
                    </div> 

                    <div className="flex gap-7 pt-8">
                        <div className="bg-[#FFF6FB] w-[36%] pt-9 pl-6">
                            <h1 className='font-josef font-semibold text-[26px] text-[#151875]'>23% off in all products</h1>
                            <p className='font-lato font-semibold text-[16px] text-Common'>Shop Now</p>
                            <div className="flex justify-end">                               
                                <img src={DiscountPic} alt="picture" />
                            </div>
                        </div>

                        <div className="bg-[#EEEFFB] w-[36%] pt-9 pl-6">
                            <h1 className='font-josef font-semibold text-[26px] text-[#151875]'>23% off in all products</h1>
                            <p className='font-lato font-semibold text-[16px] text-Common'>View Collection</p>
                            <div className="flex justify-end">                               
                                <img src={DiscountPicB} alt="picture" />
                            </div>
                        </div> 

                        <div className="w-[24%]">
                            <div className="flex items-center gap-4 pb-5">
                                <div className="flex justify-center items-center bg-[#F5F6F8] py-2">
                                    <img className='px-5' src={DiscountPicC} alt="" />
                                </div>
                                
                                <div className="text-[#151875] text-[16px]">
                                    <p className='font-josef font-semibold' >Executive Seat chair</p>
                                    <p className='font-josef' >$32.00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pb-5">
                                <div className="flex justify-center items-center bg-[#F5F6F8] py-2">
                                    <img className='px-5' src={DiscountPicC} alt="" />
                                </div>
                                
                                <div className="text-[#151875] text-[16px]">
                                    <p className='font-josef font-semibold' >Executive Seat chair</p>
                                    <p className='font-josef' >$32.00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex justify-center items-center bg-[#F5F6F8] py-2">
                                    <img className='px-5' src={DiscountPicC} alt="" />
                                </div>
                                
                                <div className="text-[#151875] text-[16px]">
                                    <p className='font-josef font-semibold' >Executive Seat chair</p>
                                    <p className='font-josef' >$32.00</p>
                                </div>
                            </div>

                            

                        </div>


                        
                    </div>
                 
                </div>     
            </div>
         </div>
    </section>
  )
}

export default TrendingProducts
