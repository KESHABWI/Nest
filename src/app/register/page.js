import { Input, Card, Link } from '@nextui-org/react'
import React from 'react'
import {Checkbox} from "@nextui-org/react";
import ParticlesComponent from '../components/particles';
import {Button} from "@nextui-org/react";

const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <Card className='p-10'>
        <div className='flex justify-center items-center mb-1'>
          <img src='logo.png' alt='logo'width='300'></img>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
         <Input type="email" label="Email or Phone Number" />
         <Input type="password" label="Password"/>
        </div>
        <div className='mb-4'>
          <Input fullWidth type='email' label='Email or Phone Number'></Input>
        </div>
        <div className='mb-4'>
          <Input fullWidth type='password' label='Password'></Input>
        </div>
        <div className="flex  justify-center gap-4 mb-4 items-center">
        <Button color="primary" radius="full">
          Register
        </Button>
        </div>
        <div className='flex justify-center items-center'>
        <p>Have an Account? <Link href='/'>Sign in</Link></p>
        </div>
      </Card>
    </div>
  )
}

export default Page
