import React from 'react'
import offerPicA from '../assets/OffersA.png'
import offerPicB from '../assets/OffersB.png'
import offerPicC from '../assets/OffersC.png'
import offerPicD from '../assets/OffersD.png'

const ShopexOffer = () => {
  return (
   <section className='py-16'>
         <div className="container mx-auto">
            <div className="">
                <h2 className='text-center font-josef text-[42px] font-bold py-[40px] text-[#151875]'>What Shopex Offer!</h2>
                <div className="flex items-center justify-between">
                    <div className="w-[23%] shadow-lg">
                        <div className="flex items-center justify-center pt-14 pb-5">
                            <img src={offerPicA} alt="featurePic" />
                        </div>
                        <div className="text-center py-4 px-8 mx-4">
                            <h3 className='font-josef text-[#151875] font-semibold text-[22px] pb-2'>24/7 Support</h3>
                            <p className='font-lato text-[16px] pt-2 text-[#D9D9D9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div> 
                    </div>

                    <div className="w-[23%] shadow-lg">
                        <div className="flex items-center justify-center pt-14 pb-5">
                            <img src={offerPicB} alt="featurePic" />
                        </div>
                        <div className="text-center py-4 px-8 mx-4">
                            <h3 className='font-josef text-[#151875] font-semibold text-[22px] pb-2'>24/7 Support</h3>
                            <p className='font-lato text-[16px] pt-2 text-[#D9D9D9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div> 
                    </div> 

                    <div className="w-[23%] shadow-lg">
                        <div className="flex items-center justify-center pt-14 pb-5">
                            <img src={offerPicC} alt="featurePic" />
                        </div>
                        <div className="text-center py-4 px-8 mx-4">
                            <h3 className='font-josef text-[#151875] font-semibold text-[22px] pb-2'>24/7 Support</h3>
                            <p className='font-lato text-[16px] pt-2 text-[#D9D9D9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div> 
                    </div> 

                    <div className="w-[23%] shadow-lg">
                        <div className="flex flex-col items-center justify-center pt-14 pb-5">
                            <img src={offerPicD} alt="featurePic" />
                        </div>
                        <div className="text-center py-4 px-8 mx-4">
                            <h3 className='font-josef text-[#151875] font-semibold text-[22px] pb-2'>24/7 Support</h3>
                            <p className='font-lato text-[16px] pt-2 text-[#D9D9D9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div> 
                    </div>             
                </div>       
            </div>
         </div>
    </section>
  )
}

export default ShopexOffer
