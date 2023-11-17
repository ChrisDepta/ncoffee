import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className=' flex flex-col w-screen items-center overflow-x-hidden overflow-y-visible'>{children}</div>
  )
}