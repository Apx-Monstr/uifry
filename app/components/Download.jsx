import React from 'react'
import CTA from './utils/CTA';
import Gradient from '../assets/Gradient.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import WhiteRings from '../assets/White Rings.png'
const Download = () => {
  return (
    <div className='bg-white w-full'>
        <div className="max-w-screen-xl mx-auto py-28">
            <div className="bg-black w-full relative rounded-md h-[500px] flex items-center overflow-hidden text-white">
                <img src={three.src}  alt="" className="absolute -right-10 z-30" />
                <img src={two.src}  alt="" className="absolute right-32 bottom-5 z-40" />
                <img src={one.src}  alt="" className="absolute right-60 bottom-3 z-50" />
                <img src={WhiteRings.src}  alt="" className="absolute bottom-20 -right-60 z-20" />
                <img src={Gradient.src}  alt="" className="absolute -bottom-10 right-0 rotate-180 z-20" />
                <img src={WhiteRings.src}  alt="" className="absolute top-40 -left-80 z-20" />
                <div className="pl-20 text-5xl clash-bold z-50">
                    Ready To GetStarted?
                    <p className='text-lg py-4'>
                        Risus habitant leo egestas mauris diam eget morbi <br /> tempus vulputate.
                    </p>
                    <div>
                        <button className='bg-white items-center px-12 text-black py-4 rounded text-lg clash clash-medium flex gap-4'>
                            Download App
                            <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download