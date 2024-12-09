import React from 'react'
import LeatestPic from '../assets/Lpic.png'

const Leatest = () => {
  return (
    <section className='py-10'>
    <div className="container mx-auto">
       <div className="">
           <h2 className='text-center font-josef text-[42px] font-bold py-[10px] text-[#151875]'>Leatest Products</h2>
           <div>
            <ul className='flex justify-center gap-10 font-lato text-[18px]'>
                <li className='text-Common'>New Arrival</li>
                <li>Best Seller</li>
                <li>Featured</li>
                <li>Special Offer</li>
            </ul>
           </div>

           <div className="flex flex-wrap items-center justify-between">
                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>

                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>

                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>

                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>

                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>

                <div className="w-[32%] my-8">
                    <div className="flex items-center justify-center  pt-16 pb-5 bg-[#F7F7F7]">
                        <img src={LeatestPic} alt="featurePic" />               
                    </div>
                    <div className="flex justify-between items-center py-3">
                            <div className="">
                                <h3 className='font-josef text-[#151875] text-[16px]'>Comfort Handy Craft</h3>
                            </div>
                            <div className="flex gap-3">
                                <p className='font-lato text-[#151875] text-[12px]'>$42.00</p>
                                <p className='font-lato text-red-600 text-[12px] line-through'>$65.00</p>
                            </div>
                    </div>  
                </div>              
            </div>          
       </div>
     </div>
</section>
  )
}

export default Leatest
