import { Input, Card, Link } from '@nextui-org/react'
import React from 'react'
import {Checkbox} from "@nextui-org/react";
import ParticlesComponent from './components/particles';
import {Button} from "@nextui-org/react";

const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <Card className='p-10'>
        <div className='text-center mb-4'>
          <img src='logo.png' alt='logo'width='300'></img>
          Sign in with
        </div>
        <div className='mb-4'>
          <Input fullWidth type='email' label='Email or Phone Number'></Input>
        </div>
        <div className='mb-4'>
          <Input fullWidth type='password' label='Password'></Input>
        </div>
        <div className='flex justify-center items-center mb-4'>
        <Checkbox  defaultSelected>Keep me signed in</Checkbox>
        </div>
        <div className="flex  justify-center gap-4 mb-4 items-center">
        <Button color="primary" radius="full">
          Sign In
        </Button>
        </div>
        <div className='flex justify-center items-center'>
        <p>New to Nest? <Link href='/register'>Join now</Link></p>
        </div>
      </Card>
    </div>
  )
}

export default Page
