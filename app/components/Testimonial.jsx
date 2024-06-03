import React from 'react'
import Gradient from '../assets/Gradient.png'
import TestimonailCenter from '../assets/Testimonial Center.png'
import TestimonailGroup from '../assets/Testimonial Group.png';
import UserGroup from '../assets/User Group.png';
const Testimonial = () => {
  return (
    <div className="bg-white w-full">
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center text-lg text-[#FF5555] clash-medium py-12">
                T E S T I M O N I A L
                <h1 className='text-5xl clash-bold text-black text-center'>
                    What Our Users <br />
                    Say About Us?
                </h1>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <div className="relative h-full w-full ">
                        <img src={Gradient.src} alt="" className="absolute top-0 -left-10" />
                        <img src={TestimonailCenter.src} alt="" className="absolute top-20 w-1/2 left-44 z-30" />
                        <img src={TestimonailGroup.src} alt="" className="left-0 absolute -top-20" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-6 py-24 justify-center ">
                    <h3 className='clash-medium text-3xl'>
                        The Best Financial Accounting <br /> App Ever!
                    </h3>
                    <p className='pr-8'>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                    </p>
                    {/* <div className="flex">
                        Images
                    </div> */}
                    <img src={UserGroup.src} className='w-48'/>
                    <h2 className="font-bold">
                        Nick Jonas
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial