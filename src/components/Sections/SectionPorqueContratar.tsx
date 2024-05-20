/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import TabProduct from '../Partials/TabMotivos'
import { Fade } from "react-awesome-reveal";
import { PorqueContratarDocument } from '../../../prismicio-types';


export default function SectionPorqueContratar({why}: {why: PorqueContratarDocument}) {
  return (
    <div className='pb-10 pt-10 md:pt-0 relative'>
      <Container>
        <div>
          <Fade direction='up' duration={1000}>       
            <p className='text-3xl md:text-4xl text-brand-purple-400 text-center font-extrabold mb-4 barlow uppercase'>{why.data.titulo}</p>
          </Fade>
          <p className='text-center text-brand-purple-400'>{why.data.descricao}</p>
        </div>
        <TabProduct why={why} />
      </Container>
      <div id='a-ceo'></div>
    </div>
  )
}
