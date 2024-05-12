'use client'
/* eslint-disable @next/next/no-img-element */
import TopBar from './TopBar'
import NavLinks from './NavLinks'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'
import Icon from '../Adapters/Icon'
import { Button } from '../Buttons/Button'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'


export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

  const { data: contact } = useSWR('getContatosHeader', () =>
    client.getSingle('contatos_e_redes_sociais')
  )

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${y > 0 ? ' bg-brand-purple-400 shadow-xl ' : 'bg-transparent'
        } `}
    >
   {/*    <TopBar /> */}
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src={contact?.data.logo_menu.url as string}
              alt={contact?.data.logo_menu.alt as string}
              className="py-3 transition-all cursor-pointer"
              style={{ height: y > 0 ? '5rem' : '7rem' }}
            />
          </Link>
          <div className='hidden lg:flex items-center gap-4'>
            <NavLinks />
          </div>
          <div className='hidden md:flex items-center gap-4'>
            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                <Button variant="outlinedWhite">Fale Conosco</Button>
            </a>
          </div>
          <div
            className="lg:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  )
}
