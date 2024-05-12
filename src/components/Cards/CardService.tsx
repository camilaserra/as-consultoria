import React from 'react'

export default function CardService({imageOne, altOne, imageTwo, altTwo, title, description} : {imageOne: string, altOne: string, imageTwo: string, altTwo: string, title: string, description: string}) {
  return (
    <div className='rounded-lg shadow-md bg-white p-4 hover-item cursor-pointer hover:bg-brand-purple-400 group h-full flex flex-col justify-center md:justify-start items-center md:items-start'>
      <img src={imageOne} alt={altOne} className='group-hover:hidden block h-10 hover-item mb-2' />
      <img src={imageTwo} alt={altTwo} className='group-hover:block hidden h-10 hover-item mb-2' />
      <p className='barlow text-xl text-brand-black-100 group-hover:text-white hover-item uppercase font-semibold mb-2'>{title}</p>
      <p className='text-sm group-hover:text-white hover-item text-center md:text-start'>{description}</p>
    </div>
  )
}
