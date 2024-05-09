'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  children: React.ReactNode
  variant:
  | 'outlinedWhite'
  | 'outlinedBlack'
  color?: string
  disabled?: boolean
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'outlinedWhite',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
  isLoading = false,
}: Props) {
  const outlinedWhite = 'bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-brand-purple-400'
  const outlinedBlack = 'bg-transparent border border-black text-black'

  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 transition-all hover:opacity-75 disabled:opacity-50
        ${variant === 'outlinedWhite' && outlinedWhite}
        ${variant === 'outlinedBlack' && outlinedBlack}
        ${full ? 'w-full' : 'w-fit'}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {
        isLoading ? <Icon icon="mingcute:loading-fill" className="text-2xl animate-spin" /> : children
      }
    </button>
  )
}
