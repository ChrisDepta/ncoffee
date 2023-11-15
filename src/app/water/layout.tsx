import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className=' bg-white flex flex-wrap justify-center w-screen items-center overflow-x-hidden overflow-y-visible'>{children}</div>
  )
}