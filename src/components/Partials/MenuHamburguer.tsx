'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { navLinks } from '../Header/NavLinks'
import { Icon } from '@iconify/react'
import { LanguageToggle } from './LanguageToggle'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../Buttons/Button'
import { client } from '@/services/prismicClient'
import useSWR from 'swr'


export function MenuHamburguer() {
  const { data: contact } = useSWR('getContatosMenuHamburgueer', () =>
    client.getSingle('contatos_e_redes_sociais')
)
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed w-[75%] md:hidden h-full bg-[url(/img/background.png)] bg-cover bg-center bg-fixed top-0 flex items-center justify-center shadow-2xl z-[999999] bg-brand-purple-400/90 backdrop-blur-md ${showMenuHamburguer ? 'right-0' : '-right-[700px]'
        } transition-all overflow-y-auto`}
    >
      <div className="w-full h-full relative">
        <Icon
          icon="mdi:close"
          className="text-3xl bg-white rounded-sm text-brand-purple-400 absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="pt-20">
          <div className="flex justify-center py-4 px-10">
            <img src={contact?.data.logo_menu.url as string} alt="AS Consultoria" />
          </div>
          {navLinks.map((link) => {
            /* if (link.submenu) {
              return (
                <div key={link.name} className="text-2xl cursor-pointer text-zinc-900 bg-white p-5 border-b border-brand-yellow">
                  <div>{link.name}</div>
                  <div className="flex flex-col gap-2">
                    {link.submenu.map((sublink) => (
                      <div
                        key={sublink.label}
                        className="text-xl cursor-pointer text-zinc-900 bg-white p-5 border-b border-brand-yellow"
                        onClick={() => handleRouting(sublink.href)}
                      >
                        {sublink.label}
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            else */
              return (
                <div
                  key={link.name}
                  className="text-lg cursor-pointer text-center text-white py-4 border-b border-white/20"
                  onClick={() => handleRouting(link.route)}
                >
                  {link.name}
                </div>
              )
          })}
          <div className="py-4">
            <a href="mailto:consultoria.as.adm@gmail.com" target="_blank" rel="noreferrer" className='flex p-2 items-center flex-col gap-1 text-2xl'>
              <p className="text-white text-center text-lg break-all">
                consultoria.as.adm@gmail.com
              </p>
            </a>
            <a href="tel:+5571999999999" target="_blank" rel="noreferrer" className='flex justify-center'>
            <Button variant="outlinedWhite">Fale Conosco</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
