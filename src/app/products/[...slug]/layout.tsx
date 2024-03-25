import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className=' flex flex-col max-w-1960px w-screen items-center overflow-x-hidden'>{children}</div>
  )
}