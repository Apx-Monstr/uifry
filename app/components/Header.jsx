import React from 'react'
import Image from 'next/image'
import CTA from './utils/CTA'
import Icon from '../assets/Icon.png'
const Header = () => {
  return (
	<div className="bg-white w-full sticky top-0 z-50">
		<div className="max-w-screen-xl mx-auto pt-6">
			<div className="bg-white flex justify-between items-center p-4 px-0">
				<div className="flex gap-6 font-bold text-xl">
					<img className='mr-4 h-12' src={Icon.src} alt="" srcset="" />
					<button className='hover:text-[#FF5555]'>
						Home
					</button>
					<button className='hover:text-[#FF5555]'>
						About Us
					</button>
					<button className='hover:text-[#FF5555]'>
						Pricing
					</button>
					<button className='hover:text-[#FF5555]'>
						Features
					</button>
				</div>
				<CTA text = {"Download"}/>
				
			</div>
		</div>
	</div>
  )
}

export default Header