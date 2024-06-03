import React from 'react'

const CTA = (props) => {
  return (
    <button className='bg-black px-12 text-white py-4 rounded text-lg clash flex gap-4'>
        {props.text}
        <slot>
            
        </slot>
    </button>
  )
}

export default CTA