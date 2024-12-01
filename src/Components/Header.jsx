import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
  <header className='bg-[#7E33E0] text-white py-3 font-josef'>
    <div className="container mx-auto">
        <div className="flex justify-between">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                    <CiMail/>
                    <p>mhhasanul@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiPhoneCall/>
                    <p>(12345)67890</p>
                </div>
            </div>
            <div className="">
                <ul className='flex items-center gap-5'>
                    <li className='flex it items-center gap-2'>
                    <select name="" id="" className='bg-transparent'>
                            <option className='bg-[#7E33E0]' value="">Eglish <FaAngleDown/></option>
                            <option className='bg-[#7E33E0]' value="">Bangla <FaAngleDown/></option>
                            <option className='bg-[#7E33E0]' value="">Arabic <FaAngleDown/></option>
                        </select>
                    </li>
                    <li className='flex it items-center gap-2'>
                        <select name="" id="" className='bg-transparent'>
                            <option className='bg-[#7E33E0]' value="">USD <FaAngleDown/></option>
                            <option className='bg-[#7E33E0]' value="">Taka <FaAngleDown/></option>
                            <option className='bg-[#7E33E0]' value="">Riyal <FaAngleDown/></option>
                        </select>
                        </li>
                    <li className='flex it items-center gap-2'>Login <FaRegUser/></li>
                    <li className='flex it items-center gap-2'>Wishlist <CiHeart/> </li>
                    <li className='flex it items-center gap-2'><CiShoppingCart className='text-[25px]'/></li>
                </ul>
            </div>
        </div>

    </div>
  </header>
  )
}

export default Header
