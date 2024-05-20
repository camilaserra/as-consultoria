/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import ContentRichText from '../Prismic/ContentRichText'
import { Button } from '../Buttons/Button'
import Icon from '../Adapters/Icon'
import { Fade } from "react-awesome-reveal";
import { ContatosERedesSociaisDocument, QuemSomosDocument} from '../../../prismicio-types'


export default function SectionQuemSomos({about, contact}: {about: QuemSomosDocument, contact: ContatosERedesSociaisDocument}) {
    
   
    return (
        <div className='pt-12 md:pt-0 pb-20 md:pb-36 lg:pb-56 bg-brand-gray-100 relative'>
            <Container>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 md:col-span-6 p-4'>
                        <p className='text-xl text-brand-purple-400 text-center md:text-start trajan'>{about?.data.titulo}</p>
                        <Fade direction='up' duration={1000}>       
                            <p className='text-3xl md:text-4xl text-brand-purple-400 text-center md:text-start font-extrabold mb-4 barlow'>{about?.data.subtitulo}</p>
                        </Fade>
                        <ContentRichText data={about?.data.conteudo_esquerdo} />
                        <div className='hidden md:flex justify-center md:justify-start'>
                            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                                <Button variant='primaryPurple'>
                                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                                    Fale Conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 md:p-4 flex flex-col items-center justify-end'>
                        <Fade duration={3000} className='w-[40%] mb-8  md:mb-4'>       
                            <img src={about?.data.imagem.url as string} alt={about?.data.imagem.alt as string}  />
                        </Fade>
                        <ContentRichText data={about?.data.conteudo_direito} />
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
            <div id='estrutura'></div>
            <img src="/img/elements/element-01-white.png" alt="Imagem element white" className='absolute bottom-0 z-40' />
        </div>
    )
}
