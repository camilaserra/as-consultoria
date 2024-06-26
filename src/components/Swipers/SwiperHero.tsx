'use client'
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { Pagination, Autoplay } from 'swiper'
import { Container } from '../Partials/Container'
import { Fade } from "react-awesome-reveal";
import { BannersDocument } from '../../../prismicio-types'


export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export default function SwiperHero({banners}: {banners: BannersDocument}) {
  
  return (
    <Swiper
      pagination={false}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      className="aspect-[21/20] md:aspect-[21/10] md:h-auto"
    >
      {banners?.data.banners.map((imagem, index) => (
        <SwiperSlide key={index} style={{ backgroundImage: `url(${imagem.imagem.url})` }} className="bg-cover bg-center bg-no-repeat flex items-center justify-start relative bg-black">
          <Container>
            <div className='flex flex-col justify-center items-center relative z-50 mt-10 md:mt-0'>
              <Fade duration={2000}>       
                <p className="text-white text-3xl mb-2 md:text-5xl font-normal relative trajan uppercase">{imagem.titulo}</p>
              </Fade>
              <Fade duration={3000} className='max-w-[90%] md:max-w-[70%]'>       
                <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold relative text-center uppercase barlow">{imagem.subtitulo}</h2>
              </Fade>
            </div>
          </Container>
          <img src="/img/elements/element-01-gray.png" alt="Imagem element white" className='absolute bottom-0 z-40 block' />
          <span className="absolute bottom-0 h-[100%] w-full bg-gradient-to-t from-brand-purple-500 to-black/20"></span>
          <div id='quem-somos'></div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
