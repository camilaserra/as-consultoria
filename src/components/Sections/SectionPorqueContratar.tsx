/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import TabProduct from '../Partials/TabMotivos'
import { Fade } from "react-awesome-reveal";


export default function SectionPorqueContratar() {
  return (
    <div className='pb-10 pt-10 md:pt-0 relative'>
      <Container>
        <div>
          <Fade direction='up' duration={1000}>       
            <p className='text-3xl md:text-4xl text-brand-purple-400 text-center font-extrabold mb-4 barlow uppercase'>POR QUE CONTRATAR UMA CONSULTORIA?</p>
          </Fade>
          <p className='text-center text-brand-purple-400'>Contratar uma consultoria pode ser o impulso que a sua empresa precisa para alcançar resultados mais sólidos e eficazes. Vamos explorar as vantagens de trazer uma consultoria para o seu negócio:</p>
        </div>
        <TabProduct />
      </Container>
      <div id='a-ceo'></div>
    </div>
  )
}
