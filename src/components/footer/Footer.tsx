import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-[#ede373] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold text-black'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg text-black'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' color='black' />
              <InstagramLogo size={48} weight='bold' color='black' />
              <FacebookLogo size={48} weight='bold' color='black' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer