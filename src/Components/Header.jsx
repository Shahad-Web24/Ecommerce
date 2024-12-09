import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {

    let [menuShow, setMenuShow] = useState(false);

    const handleMenu = () =>{
        setMenuShow(!menuShow)

    }
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
            <div className="flex">
                <ul className={`static lg:flex ${menuShow === false ? 'absolute -left-48': 'absolute left-1 top-10 bg-black w-1/2 h-full ' }`}>
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
                <div onClick={handleMenu} className="mr-5 flex items-center lg:hidden">
                    {menuShow === false ? <FaBars/> : <IoCloseSharp/>}       
                </div>
               
            </div>
        </div>

    </div>
  </header>
  )
}

export default Header
