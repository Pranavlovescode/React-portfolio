import React from 'react'
import { Button } from './ui/button'

export default function LandingPage() {
  return (
    <>
      <div className='text-white mt-32 text-center'>
        <h1 className='font-extrabold text-4xl text-blue-300'>Hey How's your day !?</h1>
      </div>
      <div>
        <Button>Click Me</Button>
      </div>
    </>
  )
}
