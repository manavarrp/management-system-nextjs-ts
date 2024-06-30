"use client";

import { useUser } from '@clerk/nextjs';
import React from 'react';

const WelcomeMsg = () => {
  const { isLoaded, user } = useUser();

  return (
    <div className='space-y-2 mb-4'>
      <h2 className='text-2xl lg:text-4xl text-white font-medium'>
        Bienvenido{isLoaded ? ", " : " "}{user?.firstName} 👋
      </h2>
      <p className='text-sm lg:text-base text-[#89b6fd]'>
        Este es tu resumen de reporte financiero
      </p>
    </div>
  );
};

export default WelcomeMsg;
