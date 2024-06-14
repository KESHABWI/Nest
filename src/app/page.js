import { Input, Card } from '@nextui-org/react'
import React from 'react'
import {Checkbox} from "@nextui-org/react";
import ParticlesComponent from './components/particles';
const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <Card className='p-10' css={{ mw: "100px"}}>
        <div className='text-center mb-6'>
          <img src='logo.png' alt='logo'width='350'></img>
          Sign in with
        </div>
        <div className='mb-10'>
          <Input fullWidth type='email' label='Email or Phone Number'></Input>
        </div>
        <div className='mb-10'>
          <Input fullWidth type='password' label='Password'></Input>
        </div>
        <div className='flex justify-center items-center'>
        <Checkbox  defaultSelected>Keep me signed in</Checkbox>
        </div>
        <div className='flex justify-center items-center'>
        <p>New to Nest? <a href='/register'>Join now</a></p>
        </div>
      </Card>
    </div>
  )
}

export default Page
