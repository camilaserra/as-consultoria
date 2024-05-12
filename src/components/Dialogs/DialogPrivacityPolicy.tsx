'use client'
import React, { useEffect, useState } from 'react'
import sm from '../../../slicemachine.config.json'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '../Buttons/Button';

export default function DialogPrivacityPolicy() {
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
        <AlertDialog.Content className="fixed border border-b-red-50 bottom-2 border-t left-[50%] w-[90%] md:w-[70%] translate-x-[-50%] rounded-lg bg-brand-purple-300 p-5 z-[9999]">
          <h2 className="text-2xl font-bold text-white">Política de privacidade</h2>
          <p className='text-white mb-4'>
            Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
          <div className='flex justify-between'>
            <Button
              onClick={setCookie}
              variant='outlinedWhite'
            >
              Aceitar Cookies
            </Button>
            <Button
              onClick={() => {
                setOpen(false)
              }}
              variant='outlinedWhite'
            >
              Rejeitar
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>

  )
}
