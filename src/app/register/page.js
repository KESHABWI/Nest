import { Input, Card, Link} from '@nextui-org/react';
import React from 'react';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import ParticlesComponent from '../components/particles';
import { Button } from "@nextui-org/react";

const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <Card className='p-10'>
        <div className='flex justify-center items-center mb-1'>
          <img src='logo.png' alt='logo' width='300'></img>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
        </div>
        <div className='mb-4'>
          <Input fullWidth type='email' label='Email or Phone Number'></Input>
        </div>
        <div className='mb-4'>
          <Input fullWidth type='password' label='Password'></Input>
        </div>
        {/* <div className='mb-4'>
          <Select className="max-w-xs" label="Select country">
            <SelectItem
              key="nepal"
              startContent={<Avatar alt="Nepal" className="w-6 h-6" src="https://flagcdn.com/np.svg" />}
            >
              Nepal
            </SelectItem>
            <SelectItem
              key="india"
              startContent={<Avatar alt="India" className="w-6 h-6" src="https://flagcdn.com/in.svg" />}
            >
              India
            </SelectItem>
            <SelectItem
              key="bangladesh"
              startContent={<Avatar alt="Bangladesh" className="w-6 h-6" src="https://flagcdn.com/bd.svg" />}
            >
              Bangladesh
            </SelectItem>
            <SelectItem
              key="bhutan"
              startContent={<Avatar alt="Bhutan" className="w-6 h-6" src="https://flagcdn.com/bt.svg" />}
            >
              Bhutan
            </SelectItem>
            <SelectItem
              key="sri lanka"
              startContent={<Avatar alt="Sri Lanka" className="w-6 h-6" src="https://flagcdn.com/lk.svg" />}
            >
              Sri Lanka
            </SelectItem>
          </Select>
        </div> */}
        <div className="flex justify-center gap-4 mb-4 items-center">
          <Button color="primary" radius="full">
            Create my Account
          </Button>
        </div>
        <div className='flex justify-center items-center'>
          <p>Already have an Account? <Link href='/'>Login</Link></p>
        </div>
      </Card>
    </div>
  );
}

export default Page;
