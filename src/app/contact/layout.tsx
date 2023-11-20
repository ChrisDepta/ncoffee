import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-nturkis/20 to-nturkis pt-32 flex flex-wrap items-center w-screen justify-center'>{children}</div>
  )
}