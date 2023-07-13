import React from 'react'
import Condata from '@/components/elements/condata'
import Conform from '@/components/elements/conform'

export default function Footer() {
  return (
    <div className='flex items-center w-screen bg-ngreen justify-center'>
      <Condata />
      <Conform />
    </div>
  )
}