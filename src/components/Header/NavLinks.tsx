'use client'
import Link from 'next/link'
import Icon from '../Adapters/Icon'
import { useSelectedLayoutSegment } from 'next/navigation'
import { DropdownHover } from './DropdownHover'

export const navLinks = [
  {
    route: '/#quem-somos',
    name: 'Quem Somos',
  },
  {
    route: '/#estrutura',
    name: 'Estrutura', 
  },
  {
    route: '/#valores',
    name: 'Valores',
  },
  {
    route: '/#porque-contratar',
    name: 'Por que Contratar?',
  },
  {
    route: '/#a-ceo',
    name: 'A CEO',
  },
  {
    route: '/#invista',
    name: 'Invista',
  },
/*   {
    route: '/blog',
    name: 'Blog',
  },
 
  {
    route: '/servicos',
    name: 'Serviços',
    dinamic_submenu_document_type: 'servico', // your document needs to have a field called "titulo"
  }, */
  /* {
    route: '/submenu',
    name: 'Submenu',
    submenu: [
      {
        label: 'Submenu 1',
        href: '/submenu/submenu1',
      },
      {
        label: 'Submenu 2',
        href: '/submenu/submenu2',
      }
    ]
  }, */
]

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {navLinks?.map((link) => {
       /*  if (link.dinamic_submenu_document_type) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
              dinamic_submenu_document_type={link.dinamic_submenu_document_type}
            />
          )
        } */
      /*   if (link.submenu) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
            />
          )
        } */
        return (
          <Link key={link.name} href={link.route}>
            <span className={`${segment === link.route.replace("/", "") ? "font-bold" : "font-normal"} hover:opacity-70 text-white uppercase cursor-pointer`}>{link.name}</span>
          </Link>
        )
      })}
    </>
  )
}
