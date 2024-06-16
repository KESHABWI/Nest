import { Input, Card, Link } from '@nextui-org/react';
import React from 'react';
import { Checkbox } from "@nextui-org/react";
import ParticlesComponent from '../components/particles';
import { Button } from '@nextui-org/react';

const Page = () => {
  return (
    <div className='relative min-h-screen bg-gray-100'>
      <ParticlesComponent id="particles" />
      <div className='relative z-10'>
        <h1 className='text-3xl font-bold'>Nest</h1>
      </div>
    </div>
  );
}

export default Page;
