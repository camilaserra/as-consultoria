/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import ContentRichTextCEO from '../Prismic/ContentRichTextCEO'
import { Fade } from "react-awesome-reveal";
import { SobreACeoDocument } from '../../../prismicio-types'



export default function SectionCEO({ceo}: {ceo: SobreACeoDocument}) {
  
  return (
    <div className='pb-32 md:pb-48 pt-20 bg-brand-purple-550 relative'>
      <Container>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-12 md:col-span-6 px-10'>
            <Fade direction='up' duration={1000}>       
              <p className='text-3xl md:text-4xl text-white text-center md:text-start font-extrabold mb-4 barlow'>{ceo?.data.titulo}</p>
            </Fade>
            <ContentRichTextCEO data={ceo?.data.descricao} />
          </div>
          <div className='col-span-12 md:col-span-6 px-10 flex justify-center'>
          <Fade duration={3000}>       
            <img src={ceo?.data.imagem.url as string} alt={ceo?.data.imagem.alt as string} className='w-[100%] md:w-[70%]' />
          </Fade>
          </div>
        </div>
      </Container>
      <div id='invista'></div>
      <img src="/img/elements/element-01-white.png" alt="Imagem element white" className='absolute bottom-0 z-40' />
    </div>
  )
}
