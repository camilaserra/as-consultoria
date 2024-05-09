'use client'
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { Pagination, Autoplay } from 'swiper'
import { Container } from '../Partials/Container'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export default function SwiperHero() {
  const { data: banners } = useSWR('getBanners', () =>
    client.getSingle('banners')
  )

  console.log(banners)
  
  return (
    <Swiper
      pagination={false}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      className="aspect-[21/10] md:h-auto"
    >
      {banners?.data.banners.map((imagem, index) => (
        <SwiperSlide key={index} style={{ backgroundImage: `url(${imagem.imagem.url})` }} className="bg-cover bg-center bg-no-repeat flex items-center justify-start relative bg-black">
          <Container>
            <div className='flex flex-col justify-center items-center relative z-50'>
              <h1 className="text-white text-3xl mb-2 md:text-5xl font-normal relative">{imagem.titulo}</h1>
              <h2 className="text-white text-lg md:text-5xl font-bold relative text-center uppercase max-w-[70%]">{imagem.subtitulo}</h2>
            </div>
          </Container>
          <img src="/img/elements/element-01-gray.png" alt="Imagem element white" className='absolute bottom-0 z-40' />
          <span className="absolute bottom-0 h-[100%] w-full bg-gradient-to-t from-brand-purple-500 to-black/20"></span>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
