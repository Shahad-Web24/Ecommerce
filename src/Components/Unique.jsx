// eslint-disable-next-line no-unused-vars
import React from 'react'
import UniquePic from '../assets/uniquePic.png'

const Unique = () => {
  return (
   <section className='bg-[#F1F0FF] my-20'>
    <div className="container mx-auto">
      <div className="flex justify-center py-5">
        <div className="w-[40%}">
          <img className="w-full" src={UniquePic} alt="Picture" />
        </div>
        <div className="w-[40%]">
          <h1 className='font-josef font-bold text-[#151875] text-[35px] pt-14 pb-4'>Unique Features Of leatest & Trending Poducts</h1>
          <ul className='list-disc list-inside text-[#ACABC3] font-lato font-medium text-[16px]'>
            <li className='py-3' >All frames constructed with hardwood solids and laminates</li>
            <li className='py-3' >Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
            <li className='py-3' >Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="flex items-center gap-4 py-6">
            <button className='bg-Common text-white py-4 px-6 font-semibold text-[17px] font-josef'>Add To Cart</button>
            <div className="text-[#151875] text-[14px]">
              <p className='font-josef font-semibold' >B&B Italian Sofa</p>
              <p className='font-lato' >$32.00</p>
            </div>
          </div>
          
          
        </div>
      </div>

        
    </div>
   </section>
  )
}

export default Unique
