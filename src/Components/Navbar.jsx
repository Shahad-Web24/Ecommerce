import React from 'react'
import Logo from "../assets/logo.png"
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='py-4'>
        <div className="container mx-auto">
            <div className="flex items-center gap-20 justify-between">
                <div className="">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="">
                    <ul className='flex items-center gap-10 font-lato'>
                        <li><Link className='flex items-center gap-2 text-[#FB2E86] relative group' to='/'>Home <FaAngleDown/>
                            <ul className='absolute top-6 left-0 hidden group-hover:block'>
                                <li>Item-1</li>
                                <li>Item-2</li>
                                <li>Item-3</li>
                                <li>Item-4</li>
                            </ul></Link>
                        </li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Blog'>Blog</Link></li>
                        <li>Products</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <input type="text" className='border-2 outline-none w-64 h-9 '/>
                    <button className='flex items-center justify-center w-16 h-9 bg-[#FB2E86]'><CiSearch className='text-[25px] text-white'/></button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
