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

export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

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
              src="/img/logo/logo-as-consultoria.png"
              alt=""
              className="py-3 transition-all cursor-pointer"
              style={{ height: y > 0 ? '5rem' : '7rem' }}
            />
          </Link>
          <div className='hidden md:flex items-center gap-4'>
            <NavLinks />
            <Link href="/contato">
              <Button variant="outlinedWhite">Fale Conosco</Button>
            </Link>
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  )
}
