import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take<span className='text-purple'> your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          acheive your goals.
        </p>
        <a href='mailto:jayliu89@gmail.com'>
          <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
        <div className='flex items-center md:gap-3 gap-6 pt-3'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 z-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-flur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            >
              <a href={profile.url}>
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
