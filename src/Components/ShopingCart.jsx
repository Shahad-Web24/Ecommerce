import React from 'react'
import { RxCross2 } from "react-icons/rx";
import CartImage from "../assets/CartImage.png"


const ShopingCart = () => {

    return (
        <section className='py-24'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-5'>
                    <div className='w-[70%]'>
                        <div className='flex items-center justify-between pb-11'>
                            <div className='w-2/5'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold'>Product</h3>
                            </div>
                            <div className='w-1/4 text-center'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold'>Price</h3>
                            </div>
                            <div className='w-1/4 text-center'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold'>Quantity</h3>
                            </div>
                            <div className='w-1/4 text-center'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold'>Total</h3>
                            </div>
                        </div>
                        
                            
                                <div className='flex items-center justify-between border-b-2 pb-3 mb-5'>
                                    <div className='w-2/5 flex items-center gap-x-4'>
                                        <div className='relative bg-slate-300'>
                                            <img className='w-20 h-20' src={CartImage} alt="cartimg" />
                                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black flex items-center justify-center'>
                                                <RxCross2 className='text-white'/>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='font-Josefin text-base text-[#000000]'>Ut diam consequat</h4>
                                            <p className='font-Josefin text-base text-[#A1A8C1]'>Color:Brown</p>
                                            <p className='font-Josefin text-base text-[#A1A8C1]'>Size:XL</p>
                                        </div>

                                    </div>
                                    <div className='w-1/4 text-center'>
                                        <h4 className='font-Josefin text-base text-[#000000]'>$32</h4>
                                    </div>
                                    <div className="flex w-1/4 items-center justify-center text-base text-[#000000]">
                                        <div className="px-3 py-1 bg-slate-300">-</div>
                                        <div className="px-6 py-1 bg-slate-200">1</div>
                                        <div className="px-3 py-1 bg-slate-300">+</div>
                                    </div>

                                    <div className='w-1/4 text-center'>
                                        <h4 className='font-Josefin text-base text-[#000000]'>‎£219.00</h4>
                                    </div>
                                </div>
                            
                        
                        <div className='flex justify-between pt-10'>
                            <button className='font-Josefin text-white text-base font-semibold py-2 px-5 rounded bg-[#FB2E86]'>Update Cart</button>
                            <button className='font-Josefin text-white text-base font-semibold py-2 px-7 rounded bg-[#FB2E86]'>Clear Cart</button>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div>
                            <div className='pb-10'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold text-center'>Cart Totals</h3>
                            </div>
                            <div className='bg-[#F4F4FC] p-8 rounded'>
                                <div className='flex justify-between border-b-2 mb-10 pb-3'>
                                    <h4 className='font-Lato font-semibold text-lg text-[#1D3178]'>Subtotals:</h4>
                                    <h4 className='font-Lato text-[#15245E]'>‎£219.00</h4>
                                </div>
                                <div className='flex justify-between border-b-2 mb-9 pb-3'>
                                    <h4 className='font-Lato font-semibold text-lg text-[#1D3178]'>Totals:</h4>
                                    <h4 className='font-Lato text-[#15245E]'>‎£219.00</h4>
                                </div>
                                <div className='flex gap-2 mb-9'>
                                    <input type="checkbox" />
                                    <p className='font-Lato text-[#8A91AB] text-sm'>Shipping & taxes calculated at checkout</p>
                                </div>
                                <button className='font-Lato font-bold text-white bg-[#19D16F] w-full py-2 rounded-md'>Proceed To Checkout</button>                  
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='pb-10'>
                                <h3 className='font-Josefin text-[#1D3178] text-xl font-bold text-center'>Calculate Shopping</h3>
                            </div>
                            <div className='bg-[#F4F4FC] p-8 rounded-md'>
                                <div className='mb-10'>
                                    <input className='border-b-2 pb-3 w-full outline-none bg-transparent' type="text" placeholder='Bangladesh' />
                                </div>
                                <div className='mb-10'>
                                    <input className='border-b-2 pb-3 w-full outline-none bg-transparent' type="text" placeholder='Mirpur Dhaka - 1200' />
                                </div>
                                <div className='mb-9'>
                                    <input className='border-b-2 pb-3 w-full outline-none bg-transparent' type="text" placeholder='Postal Code' />
                                </div>
                                <button className='font-Josefin font-semibold text-base text-white bg-[#FB2E86] py-2 px-6 rounded'>Calculate Shipping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopingCart
