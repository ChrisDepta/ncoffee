import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='z-20 flex flex-col max-w-[1920px] w-screen items-center overflow-x-hidden'>{children}</div>
  )
}