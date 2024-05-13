/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'
import Icon from '../Adapters/Icon'
import { Fade } from "react-awesome-reveal";



export default function SectionInvista() {
    const { data: invista } = useSWR('getInvista', () =>
        client.getSingle('invista_na_excelencia')
    )
    const { data: contact } = useSWR('getContatosInvista', () =>
        client.getSingle('contatos_e_redes_sociais')
    )
    return (
        <div className='pt-10 pb-10 md:pb-20'>
            <Container>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 md:col-span-4'>
                        <Fade direction='up' duration={1000}>       
                        <p className='text-3xl md:text-4xl text-brand-purple-400 text-center md:text-start font-extrabold mb-4 barlow uppercase'>{invista?.data.titulo}</p>
                        </Fade>
                        <p className='text-center md:text-start'>{invista?.data.descricao}</p>
                    </div>
                    <div className='col-span-12 md:col-span-3'>
                        <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer" className='flex-col md:flex-row flex gap-2 cursor-pointer group py-2 md:py-5 justify-center md:justify-end items-center md:items-start border md:border-none border-brand-purple-400 rounded-lg'>
                            <Icon icon="ri:whatsapp-fill" className='text-brand-purple-300 text-5xl flex-none group-hover:text-brand-purple-400 hover-item' />
                            <div className=''>
                                <p className='text-xl md:text-2xl text-brand-purple-300 text-center md:text-start font-extrabold mb-2 barlow group-hover:text-brand-purple-400 hover-item'>{invista?.data.titulo_whatsapp}</p>
                                <p className='text-2xl md:text-3xl text-brand-purple-300 text-center md:text-start mb-4 barlow group-hover:text-brand-purple-400 hover-item'>{contact?.data.whatsapp}</p>
                            </div>
                        </a>
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <a href={`mailto:${contact?.data.email}`} target="_blank" rel="noreferrer" className='flex-col md:flex-row flex gap-2 cursor-pointer group py-2 md:py-5 justify-center md:justify-end items-center md:items-start border md:border-none border-brand-purple-400 rounded-lg'>
                            <Icon icon="ic:baseline-email" className='text-brand-purple-300 text-5xl flex-none group-hover:text-brand-purple-400 hover-item' />
                            <div className=''>
                                <p className='text-xl md:text-2xl text-brand-purple-300 text-center md:text-start font-extrabold mb-2 barlow group-hover:text-brand-purple-400 hover-item'>{invista?.data.titulo_email}</p>
                                <p className='text-2xl md:text-3xl text-brand-purple-300 text-center md:text-start mb-4 barlow group-hover:text-brand-purple-400 hover-item break-all'>{contact?.data.email}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        
        </div>
    )
}
