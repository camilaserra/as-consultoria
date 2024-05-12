/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import { client } from '@/services/prismicClient'
export const fetchCache = 'force-no-store'
import useSWR from 'swr'
import { Button } from '../Buttons/Button'
import Icon from '../Adapters/Icon'
import { Fade } from "react-awesome-reveal";


export default async function SectionValores() {
  const { data: values } = useSWR('getValores', () =>
    client.getSingle('missao_visao_valores')
  )
  const { data: contact } = useSWR('getContatosTres', () =>
    client.getSingle('contatos_e_redes_sociais')
  )
  
  return (
    <div className='relative'>
      <div className="pt-10 md:pt-0 pb-10 md:pb-20 bg-brand-purple-550 -translate-y-1">
        <Container>
          <div className='grid grid-cols-12 md:gap-4'>
            <div className='col-span-12 md:col-span-4'>
              <Fade direction='up' duration={1000}>       
                <p className='text-3xl md:text-4xl text-white text-center md:text-start font-extrabold mb-4 uppercase barlow'>{values?.data.titulo_missao}</p>
              </Fade>
              <p className='text-white text-center md:text-start'>{values?.data.descricao_misao}</p>
            </div>
            <div className='col-span-12 md:col-span-4 pt-10 md:pt-0'>
              <Fade direction='up' duration={1000}>       
              <p className='text-3xl md:text-4xl text-white text-center md:text-start font-extrabold mb-4 uppercase barlow'>{values?.data.titulo_visao}</p>
              </Fade>
              <p className='text-white text-center md:text-start'>{values?.data.descricao_visao}</p>
            </div>
            <div className='col-span-12 md:col-span-4 relative hidden md:block'>
                    
              <img src={values?.data.ilustracao.url as string} alt={values?.data.ilustracao.alt as string} className='absolute' />
              
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-10 pb-20 md:pb-40 bg-brand-gray-100">
        <Container>
          <div className='grid grid-cols-12 gap-4'>
            <div className=' col-span-12 md:col-span-8'>
              <Fade direction='up' duration={1000}>       
                <p className='text-3xl md:text-4xl text-brand-purple-400 text-center md:text-start font-extrabold mb-4 barlow uppercase'>Valores</p>
              </Fade>
              <div className='grid grid-cols-12 gap-2'>
                {values?.data.grupo_de_valores.map((par, index) => {
                  return (
                    <div key={index} className='col-span-12 md:col-span-4'>
                      <p className='text-lg text-brand-purple-400 font-semibold text-center md:text-start'>{par.titulo}</p>
                      <p className='text-sm text-brand-purple-400 text-center md:text-start'>{par.descricao}</p>
                    </div>
                  )}
                )}
              </div>
            </div>
          </div>
        </Container>
        <div className='pt-10 flex justify-center z-50 relative'>
          <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
            <Button variant='primaryPurple'>
                <Icon icon="token:chat" className='text-4xl animate-pulse' />
                Fale Conosco
            </Button>
          </a>
        </div>
        <div id='porque-contratar'></div>
      </div>
      <img src="/img/elements/element-01-white.png" alt="Imagem element white" className='absolute bottom-0 z-40' />
    </div>
  )
}
