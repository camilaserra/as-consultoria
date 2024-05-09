'use client'
import React from 'react'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'
import { Container } from '../Partials/Container'
import ContentRichText from '../Prismic/ContentRichText'


export default function SectionQuemSomos() {
    const { data: about } = useSWR('getquemSomos', () =>
        client.getSingle('quem_somos')
    )
    return (
        <div className='pb-36 bg-brand-gray-100 relative'>
            <Container>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 md:col-span-6 p-4'>
                        <p className='text-xl text-brand-purple-400 text-center md:text-start'>{about?.data.titulo}</p>
                        <p className='text-4xl text-brand-purple-400 text-center md:text-start font-extrabold mb-4'>{about?.data.subtitulo}</p>
                        <ContentRichText data={about?.data.conteudo_esquerdo} />
                    </div>
                    <div className=' col-span-12 md:col-span-6 p-4 flex flex-col items-center justify-end'>
                        <img src={about?.data.imagem.url as string} alt={about?.data.imagem.alt as string} className='w-[40%] mb-4' />
                        <ContentRichText data={about?.data.conteudo_direito} />
                    </div>
                </div>
            </Container>
            <img src="/img/elements/element-01-white.png" alt="Imagem element white" className='absolute bottom-0 z-40' />
        </div>
    )
}
