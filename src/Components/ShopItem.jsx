import React, { useContext, useEffect } from 'react'
import { apiData } from './ContextApi'
import { MdArrowDropDown } from "react-icons/md";
import { useState } from 'react';

const ShopItem = () => {

    const Data =useContext(apiData)

    let [category, setCategory] = useState ([])
    let [brand, setBrand] = useState ([])

    useEffect(()=>{
      setCategory([...new Set(Data.map((item)=> item.category))])
      setBrand([...new Set(Data.map((item)=> item.brand))])
    }, [Data])

    let [catShow, setCatShow] = useState(false)
    let [brandShow, setBrandShow] = useState(false)
    
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="w-[25%]">
                  <h1 onClick={()=>setCatShow(!catShow)} className=' flex items-center gap-5 font-josef font-bold text-[20px] text-semiCommon pb-3'>Shop by Categories <MdArrowDropDown /></h1>
                  {catShow &&
                  <ul className='h-36 overflow-y-scroll font-josef text-[#7E81A2] text-[16px]'>
                  {category.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <li className='pb-2'>{item}</li>
                  ))}
                  </ul>
                  }
                  <h1 onClick={()=>setBrandShow(!brandShow)} className=' flex items-center gap-5 font-josef font-bold text-[20px] text-semiCommon pb-3 pt-2'>Shop by Brands <MdArrowDropDown /></h1>
                  {brandShow &&
                  <ul className='h-36 overflow-y-scroll font-josef text-[#7E81A2] text-[16px]'>
                  {brand.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <li className='pb-2'>{item}</li>
                  ))}
                  </ul>
                  }
                </div>

                <div className="flex items-center justify-between flex-wrap w-[75%]">
                  {Data.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div className="w-[32%] shadow-lg mb-10">
                    <div className="flex flex-col items-center justify-center  pt-12 pb-5 bg-[#F6F7FB]">
                        <img src={item.thumbnail} alt="featurePic"/>
                    </div>
                    <div className="text-center py-5">
                        <h3 className='font-josef text-[#151875] font-bold text-[18px] pb-3'>{item.title}</h3>
                        <div className="flex items-center justify-center gap-3">
                            <p className='font-josef text-[14px] text-semiCommon'>${item.price}</p>
                            <p className='font-josef text-[14px] text-Common line-through'>${item.price}</p>
                        </div>
                        
                    </div>              
                  </div>
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopItem
