/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import { client } from '@/services/prismicClient'
export const fetchCache = 'force-no-store'
import useSWR from 'swr'
import CardService from '../Cards/CardService'
import { Button } from '../Buttons/Button'
import Icon from '../Adapters/Icon'
import { Fade } from "react-awesome-reveal";


export default function SectionNossaEstrutura() {
  const { data: info } = useSWR('getNossaEstrutura', () =>
    client.getSingle('nossa_estrutura')
  )
  const { data: contact } = useSWR('getContatosDois', () =>
    client.getSingle('contatos_e_redes_sociais')
  )
  
  return (
    <div className="bg-white relative pb-20 md:pb-48">
      <Container>
        <div className='grid grid-cols-12'>
          <div className='py-10 col-span-12 md:col-span-4 md:p-4'>
              <p className='text-xl text-brand-purple-400 text-center md:text-start trajan'>{info?.data.titulo}</p>
              <Fade direction='up' duration={1000}>       
                <p className='text-3xl md:text-4xl text-brand-purple-400 text-center md:text-start font-extrabold mb-4 barlow'>{info?.data.subtitulo}</p>
              </Fade>
              <p className='text-center md:text-justify mb-4'>{info?.data.descricao}</p>
              <div className='hidden md:flex justify-center md:justify-start'>
                <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                  <Button variant='primaryPurple'>
                      <Icon icon="token:chat" className='text-4xl animate-pulse' />
                      Fale Conosco
                  </Button>
                </a>
              </div>
          </div>
          <div className='col-span-12 md:col-span-8 p-4'>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-12 md:col-span-6 h-full'>
                <Fade duration={3000} className='h-full'>       
                  <CardService imageOne={info?.data.icone_card_um.url as string} altOne={info?.data.icone_card_um.alt as string} imageTwo={info?.data.icone_card_um_variavel.url as string} altTwo={info?.data.icone_card_um_variavel.alt as string} title={info?.data.titulo_card_um as string} description={info?.data.descricao_card_um as string} />
                </Fade>
              </div>
              <div className=' col-span-12 md:col-span-6 h-full'>
                <Fade duration={3000} className='h-full'>       
                  <CardService imageOne={info?.data.icone_card_dois.url as string} altOne={info?.data.icone_card_dois.alt as string} imageTwo={info?.data.icone_card_dois_variavel.url as string} altTwo={info?.data.icone_card_dois_variavel.alt as string} title={info?.data.titulo_card_dois as string} description={info?.data.descricao_card_dois as string} />
                </Fade>
              </div>
              <div className=' col-span-12 md:col-span-6 h-full'>
                <Fade duration={3000} className='h-full'>       
                  <CardService imageOne={info?.data.icone_card_tres.url as string} altOne={info?.data.icone_card_tres.alt as string} imageTwo={info?.data.icone_card_tres_variavel.url as string} altTwo={info?.data.icone_card_tres_variavel.alt as string} title={info?.data.titulo_card_tres as string} description={info?.data.descricao_card_tres as string} />
                </Fade>
              </div>
              <div className=' col-span-12 md:col-span-6 h-full'>
                <Fade duration={3000} className='h-full'>       
                  <CardService imageOne={info?.data.icone_card_quatro.url as string} altOne={info?.data.icone_card_quatro.alt as string} imageTwo={info?.data.icone_card_quatro_variavel.url as string} altTwo={info?.data.icone_card_quatro_variavel.alt as string} title={info?.data.titulo_card_quatro as string} description={info?.data.descricao_card_quatro as string} />
                </Fade>
              </div>
            </div>
            <div className='flex md:hidden justify-center md:justify-start mt-8'>
                <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                  <Button variant='primaryPurple'>
                      <Icon icon="token:chat" className='text-4xl animate-pulse' />
                      Fale Conosco
                  </Button>
                </a>
              </div>
          </div>
        </div>
      </Container>
      <div id='valores'></div>
      <img src="/img/elements/element-purple.svg" alt="Imagem element purple" className='absolute bottom-0 z-40' />
    </div>
  )
}
