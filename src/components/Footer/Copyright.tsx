/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '../Partials/Container'

export function Copyright() {
  return (
    <div className="py-4 border-t border-t-white/20">
      <Container>
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
          <p className="text-xs m-0 text-white/80">
            AS Consultoria © Todos os direitos reservados {new Date().getFullYear()}
          </p>
          
   
          <div className="flex items-center">
            <p className="flex items-center text-xs m-0">
              <a
                href="https://www.camilaserra.dev/"
                target="_blank"
                rel="noreferrer"
                className='text-white/80'
                title='Quem é a Jedi que criou isto? 🫳 Clique e descubra!'
              >
                Design and implementation by Camila Serra
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
