'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  children: React.ReactNode
  variant:
  | 'outlinedWhite'
  | 'outlinedPurple'
  | 'primaryPurple'
  | 'primaryWhite'
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
  const outlinedWhite = 'bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-brand-purple-400 hover-item'
  const outlinedPurple = 'bg-transparent border border-brand-purple-400 text-brand-purple-400 rounded-md hover:bg-brand-purple-300 hover:text-white hover-item'
  const primaryPurple = 'bg-brand-purple-300 text-white rounded-full hover:bg-brand-purple-400 hover-item shadow-lg hover:-translate-y-1'
  const primaryWhite = 'bg-white text-brand-purple-400 border border-white rounded-full hover-item shadow-lg hover:border-brand-purple-400 hover:-translate-y-1'

  return (
    <button
      className={`flex items-center justify-center gap-1 px-4 py-2 transition-all
        ${variant === 'outlinedWhite' && outlinedWhite}
        ${variant === 'outlinedPurple' && outlinedPurple}
        ${variant === 'primaryPurple' && primaryPurple} 
        ${variant === 'primaryWhite' && primaryWhite}
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
