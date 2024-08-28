'use client'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });
  return (
   <div>
      <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
        <img className='w-full rounded' src='/1.png' />
        <img className='w-full rounded' src='/2.png' />  
        <img className='w-full rounded' src='/3.png' />
        <img className='w-full rounded' src='/1.png' />
      
      </SlideshowLightbox> 
   </div>
  );
}
