import React from 'react'

const pageHeading = (props) => {
  return (
   <section className='bg-[#F6F5FF] py-24'>
    <div className="container mx-auto">
        <div className=" ">
            <h1 className='font-josef text-[36px] font-bold'>{props.heading}</h1>
            <h4 className='text-[16px]'>Home. Pages. <span className='text-Common'>{props.pageName}</span></h4>
        </div>
    </div>
   </section>
  )
}

export default pageHeading
