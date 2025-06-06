import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm text-white'>
        <Image src={'/logo.svg'} alt="Logo" width={30} height={30} />
        <UserButton/>   
    </div>
  )
}

export default AppHeader