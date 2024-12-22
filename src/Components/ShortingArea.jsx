import React from 'react'
import { MdViewList } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";

const ShortingArea = () => {
  return (
   <section className='py-10'>
    <div className="container mx-auto">
        <div className="flex items-center">
            <div className="">
                <h2 className='font-josef font-bold text-[22px] text-[#151875]'>Ecommerce Acceories & Fashion item</h2>
                <p className='font-lato text-[12px] text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="flex items-center gap-20 pl-40">
                <div className="flex items-center gap-2 ">
                    <p className='font-lato text-[16px] text-[#3F509E]'>Per Page:</p>
                    <input type="text" className='border-2 outline-none w-12 h-8 px-1'/>
                </div>

                <div className="flex items-center gap-2">
                    <p className='font-lato text-[16px] text-[#3F509E]'>Sort By:</p>
                    <select name="" id="" className='border-2 outline-none w-25 h-8 font-lato text-[16px] text-[#8A8FB9]'>
                        <option value="">Best Match</option>
                        <option value="">Most Popular</option>
                        <option value="">Featured</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <p className='font-lato text-[16px] text-[#3F509E]'>View:</p>
                    <HiViewGrid/>
                    <MdViewList/>
                    <input type="text" className='border-2 outline-none w-40 h-8 px-1' />
                </div>
            </div>
        </div>
        
        
    </div>
   </section>
  )
}

export default ShortingArea
