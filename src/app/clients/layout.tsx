import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='z-10 flex flex-wrap w-screen items-center justify-center overflow-x-hidden bg-white'>{children}</div>
  )
}