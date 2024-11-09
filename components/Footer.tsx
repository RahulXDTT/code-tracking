import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import { profile } from 'console'
import { div } from 'framer-motion/client'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-3 pb-10' id='contact'>
        
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-center mb-4 lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>digital presence to the next level?</span>
            </h1>

            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achive tour goals</p>

            <a href="mailto:25srahulmain2004@gmail.com">
                <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light '>Copyright © 2024 Rahul</p>

            <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => 
                <div key={profile.id} className='sm:mt-5 mt-5 w-10 h-10 cursor-pointer flex justify-center items-center
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-xl border border-black-300' >
                    <img src={profile.img} alt=" {profile.id} "
                    width={20} height={20} />
                </div>
                )}
            </div>
        </div>
    </footer>
  )
}

export default Footer