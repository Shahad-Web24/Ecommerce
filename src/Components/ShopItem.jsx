import React, { useContext } from 'react'
import { apiData } from './ContextApi'

const ShopItem = () => {

    const data =useContext(apiData)
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-[20%]">
                <h1 className=' font-josef font-bold text-[20px] text-semiCommon'>Categories</h1>
                </div>

                <div className="flex items-center justify-between flex-wrap w-[80%]">
                {data.map((item)=>(
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
