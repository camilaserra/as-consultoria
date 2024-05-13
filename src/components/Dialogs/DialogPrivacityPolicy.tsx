'use client'
import React, { useEffect, useState } from 'react'
import sm from '../../../slicemachine.config.json'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '../Buttons/Button';
import useSWR from 'swr'
import { client } from '@/services/prismicClient';
import ContentRichText from '../Prismic/ContentRichText';


export default function DialogPrivacityPolicy() {
  const { data: cookies } = useSWR('getCokies', () =>
    client.getSingle('cookies')
  )

  const [open, setOpen] = useState(false)

  const cookieName = `user-accept-cookies_${sm.repositoryName}`

  function setCookie() {
    localStorage.setItem(cookieName, cookieName)
    setOpen(false)
  }

  useEffect(() => {
    const cookie = localStorage.getItem(cookieName) || ''
    if (!cookie.includes(cookieName)) {
      setOpen(true)
    }

  }, [cookieName])

  return (

    <AlertDialog.Root open={open}
    >
      <AlertDialog.Portal>
        <AlertDialog.Content className="fixed border border-b-red-50 bottom-2 border-t left-[50%] w-[90%] md:w-[30%] translate-x-[-50%] rounded-lg bg-white/90 p-5 z-[9999]">
          <h2 className="text-xl font-bold text-brand-black-100 text-center mb-4">{cookies?.data.titulo}</h2>
          <ContentRichText data={cookies?.data.conteudo as any} />
          <div className='flex justify-between'>
            <Button
              onClick={setCookie}
              variant='outlinedPurple'
            >
              Aceitar Cookies
            </Button>
            <Button
              onClick={() => {
                setOpen(false)
              }}
              variant='outlinedPurple'
            >
              Rejeitar
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>

  )
}
