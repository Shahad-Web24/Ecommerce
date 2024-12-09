import React from 'react'
import Logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#E5E5E5]'>
        <div className="container mx-auto">
            <div className="">
                <div className="flex justify-between py-28">
                    <div className="">
                        <img src={Logo} alt="Logo" />                    
                        <div className="flex items-center pt-10 pb-6">
                            <input type="text" className='border-2 outline-none w-64 h-9 '/>
                            <p className='flex items-center justify-center w-16 h-9 bg-[#FB2E86] text-white font-Roboto text-[16px] font-medium' >Sign Up</p>
                        </div>
                        <p className='pb-2 text-[#8A8FB9] font-lato text-[16px]'>Contact Info</p>
                        <p className='text-[#8A8FB9] font-lato text-[16px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>

                    <div className="">
                        <h3 className='font-josef font-semibold text-[22px]'>Catagories</h3>
                        <ul className='text-[#8A8FB9] font-lato text-[16px] pt-10'>
                            <li className='py-3' >Laptops & Computers</li>
                            <li className='py-3' >Cameras & Photography</li>
                            <li className='py-3' >Smart Phones & Tablets</li>
                            <li className='py-3' >Video Games & Consoles</li>
                            <li className='py-3' >Waterproof Headphones</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className='font-josef font-semibold text-[22px]'>Customer Care</h3>
                        <ul className='text-[#8A8FB9] font-lato text-[16px] pt-10'>
                            <li className='py-3' >My Account</li>
                            <li className='py-3' >Discount</li>
                            <li className='py-3' >Returns</li>
                            <li className='py-3' >Orders History</li>
                            <li className='py-3' >Order Tracking</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className='font-josef font-semibold text-[22px]'>Pages</h3>
                        <ul className='text-[#8A8FB9] font-lato text-[16px] pt-10'>
                            <li className='py-3' >Blog</li>
                            <li className='py-3' >Browse the Shop</li>
                            <li className='py-3' >Category</li>
                            <li className='py-3' >Pre-Built Pages</li>
                            <li className='py-3' >Visual Composer Elements</li>
                            <li className='py-3' >WooCommerce Pages</li>                            
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-evenly pb-6">
                    <p>©Webecy - All Rights Reserved</p>
                    <div className='flex items-center gap-3'>
                        <FaFacebook/>
                        <IoMdMail/>
                        <FaTwitterSquare/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
