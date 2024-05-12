'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import { Container } from '../Partials/Container'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'
import { Button } from '../Buttons/Button'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'


export default function Footer() {
  const { data: contact } = useSWR('getContatosFooter', () =>
    client.getSingle('contatos_e_redes_sociais')
  )

  return (
    <footer className="border-t bg-brand-purple-550">
      <Container>
        <div className="grid grid-cols-12 py-20">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div className="flex justify-center md:justify-start">
              <img src={contact?.data.logo_footer.url as string} alt="Logo" className="w-[80%] md:w-[70%] mb-10 md:mb-0" />
            </div>
            <div className='flex justify-center md:justify-start mb-10 md:mb-0'>
              <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                <Button variant='primaryWhite'>
                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                    Fale Conosco
                </Button>
              </a>
            </div>
          </div>

          <div className='col-span-12 md:col-span-7 grid grid-cols-12'>
            <div className='col-span-12 md:col-span-4 flex flex-col items-center md:items-start gap-2 mb-10 md:mb-0'>
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <p className='text-white barlow uppercase hover-item hover:text-brand-purple-100'>{link.name}</p>
                  </Link>
                )
              })}
            </div>

            <div className='col-span-12 md:col-span-8 grid grid-cols-12 gap-4'>
              <div className='col-span-12 md:col-span-7'>
                {contact?.data.endereco && (
                  <div>
                    <p className='text-white uppercase barlow font-bold mb-2 text-center md:text-start'>Escritório</p>
                    <p className='text-white mb-2 text-center md:text-start'>{contact?.data.endereco}</p>
                  </div>
                )}
              </div>

              <div className='col-span-12 md:col-span-5'>
                <p className='text-white uppercase barlow font-bold mb-2 text-center md:text-start'>SIGA NOS</p>
                <div className="flex gap-2 justify-center md:justify-start mb-4 md:mb-0">
                  {contact?.data.linkedin && (
                    <a href={contact?.data.linkedin as string} rel="noreferrer" target="_blank" className='p-1 group rounded-full bg-brand-purple-200 w-10 h-10 flex justify-center items-center hover-item hover:bg-brand-purple-100'>
                      <Icon icon="jam:linkedin" className='text-white group-hover:text-brand-purple-400' />
                    </a>
                  )}
                  <a href={contact?.data.twitter as string} rel="noreferrer" target="_blank" className='p-1 group rounded-full bg-brand-purple-200 w-10 h-10 flex justify-center items-center hover-item hover:bg-brand-purple-100'>
                    <Icon icon="prime:twitter" className='text-white group-hover:text-brand-purple-400' />
                  </a>
                  <a href={contact?.data.facebook as string} rel="noreferrer" target="_blank" className='p-1 group rounded-full bg-brand-purple-200 w-10 h-10 flex justify-center items-center hover-item hover:bg-brand-purple-100'>
                    <Icon icon="ri:facebook-fill" className='text-white group-hover:text-brand-purple-400' />
                  </a>
                  <a href={contact?.data.instagram as string} rel="noreferrer" target="_blank" className='p-1 group rounded-full bg-brand-purple-200 w-10 h-10 flex justify-center items-center hover-item hover:bg-brand-purple-100'>
                    <Icon icon="mdi:instagram" className='text-white group-hover:text-brand-purple-400' />
                  </a>
                </div>
              </div>

              <div className=' col-span-12 md:col-span-12'>
                {contact?.data.telefone && (
                  <div>
                    <p className='text-white uppercase barlow font-bold mb-2 text-center md:text-start'>Atendimento</p>
                    <a href={`tel:+55${contact?.data.telefone_link}`}  target="_blank" rel="noreferrer" className='flex gap-1 items-center justify-center md:justify-start'>
                      <Icon icon="line-md:phone-call-loop" className='text-white text-xl' />
                      <p className='text-white hover-item hover:text-brand-purple-100'>{contact?.data.telefone}</p>
                    </a>
                  </div>
                )}
                {contact?.data.email && (
                  <div>
                    <a href={`mailto:${contact?.data.email}`}  target="_blank" rel="noreferrer" className='flex gap-1 items-center justify-center md:justify-start'>
                      <Icon icon="line-md:email" className='text-white text-xl' />
                      <p className='text-white hover-item hover:text-brand-purple-100 break-all'>{contact?.data.email}</p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
