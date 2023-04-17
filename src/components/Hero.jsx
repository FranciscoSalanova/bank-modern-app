import React from 'react'

import styles from '../style.js'

import { discount, robot } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[27px] h-[27px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>
            DISCOUNT FOR
            <span className='text-white'> 1 MONTH </span>
            ACCOUNT
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          The Next Generation Payment Method.
        </div>
      </div>
    </section>
  )
}

export default Hero