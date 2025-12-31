"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'




const heroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
             <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600'>  Hello I'm {""}
              </span>
              <br/>
              <TypeAnimation
sequence={[
  'Somi Batool',
  1000,
  'Web Developer ',
  1000,
    'Front-End Developer ',
  1000,
    'Wordpress Developer ',
  1000,
]}
  wrapper='span'
  speed={50}
  
  repeat={Infinity}
/>
              
              
              </h1>
        <p className='text-[#ADB7BE] text-base  mb-6 sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi, sint aliquid voluptas nesciunt blanditiis eaque consequatur, aperiam qui perspiciatis expedita ipsum? Deleniti, ut! Repellendus fuga itaque distinctio iusto cupiditate?</p>
        <div>
            <button className='px-6 py-3  rounded-full mr-4  hover:bg-slate-200 text-white w-full sm:w-fit bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 '>Hire Me</button>
            <button className='px-1 py-1   rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3 w-full sm:w-fit '>
             <span className='block  bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' >
               Download CV
             </span>
              </button>
        </div>
          </div>
          <div className='col-span-5 place-selft-center mt-5 '>
           <div className='rounded-full bg-[#181818] w-62.5 h-62.5 relative lg:w-[320px] lg:h-80'>
             <img src="/images/portfolio.png" alt="somi-img"
             className='absolute transform -translate-x-1 -translate-y-25  rounded-xl lg:w-100 lg:h-100 '
              width={400} />
           </div>

          </div>
      </div>
    </section>
  )
}

export default heroSection