import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className=' flex flex-wrap items-start justify-center h-screen w-screen overflow-x-hidden'>{children}</div>
  )
}