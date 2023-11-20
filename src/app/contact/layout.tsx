import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='mt-32 flex items-center w-screen justify-center'>{children}</div>
  )
}