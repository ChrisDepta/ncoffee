import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='z-10 pt-36 flex flex-wrap w-screen items-center justify-center overflow-x-hidden bg-gradient-to-t from-white via-white to-nbluehome'>{children}</div>
  )
}