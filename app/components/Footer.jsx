import React from 'react'
import CTA from './utils/CTA'
import Icon from '../assets/Icon.png';
const Footer = () => {
  return (
    <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto">
            <div className="flex py-28">
                <div className="flex-1 flex flex-col gap-6">
                    <img className='w-36' src={Icon.src}/>
                    <div className="flex gap-2 font-black">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9394 3.70898C18.2804 3.70898 19.5704 4.23898 20.5194 5.18998C21.4694 6.13898 22.0004 7.41898 22.0004 8.75898V16.659C22.0004 19.449 19.7304 21.709 16.9394 21.709H7.06043C4.26943 21.709 2.00043 19.449 2.00043 16.659V8.75898C2.00043 5.96898 4.25943 3.70898 7.06043 3.70898H16.9394ZM18.0704 8.90898C17.8604 8.89798 17.6604 8.96898 17.5094 9.10898L13.0004 12.709C12.4204 13.19 11.5894 13.19 11.0004 12.709L6.50043 9.10898C6.18943 8.87898 5.75943 8.90898 5.50043 9.17898C5.23043 9.44898 5.20043 9.87898 5.42943 10.179L5.56043 10.309L10.1104 13.859C10.6704 14.299 11.3494 14.539 12.0604 14.539C12.7694 14.539 13.4604 14.299 14.0194 13.859L18.5304 10.249L18.6104 10.169C18.8494 9.87898 18.8494 9.45898 18.5994 9.16898C18.4604 9.01998 18.2694 8.92898 18.0704 8.90898Z" fill="#FF5555"/>
                        </svg>
                        Help@Frybix.com
                    </div>
                    <div className="flex gap-2 font-black">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z" fill="#FF5555"/>
                        </svg>
                        +1 234 456 678 89
                    </div>
                </div>
                <div className="flex-1 flex gap-8 items-start flex-col font-medium">
                    <h3 className="text-3xl clash-medium">
                        Links
                    </h3>
                    <button className='hover:text-[#FF5555] font-black'>
						Home
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						About Us
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Bookings
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Blogs
					</button>
                </div>
                <div className="flex-1 flex gap-8 items-start flex-col font-medium">
                    <h3 className="text-3xl clash-medium">
                        Legal
                    </h3>
                    <button className='hover:text-[#FF5555] font-black'>
						Term of Use
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Privacy Policy
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Cookie Policy
					</button>
                </div>
                <div className="flex-1 flex gap-8 items-start flex-col font-medium">
                    <h3 className="text-3xl clash-medium">
                        Product
                    </h3>
                    <button className='hover:text-[#FF5555] font-black'>
						Take Tour
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Live Chat
					</button>
                    <button className='hover:text-[#FF5555] font-black'>
						Reviews
					</button>
                </div>
                <div className="flex-1 flex gap-8 items-start flex-col font-medium">
                    <h3 className="text-3xl clash-medium">
                        Newsletter
                    </h3>
                    <p className="font-black">
                        Stay Up To Date
                    </p>
                    <div className="flex gap-8">
                        <div className="p-4 w-32 text-gray-500">
                            Your Email
                        </div>
                        <CTA text = "Subscribe"/>
                    </div>
                </div>
            </div>
            <div className="gradient-border flex items-center justify-center py-16 font-bold">
                Copyright 2022 Uifry.com all rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer