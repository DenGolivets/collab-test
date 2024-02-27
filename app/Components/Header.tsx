'use clients';

import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between gap-4'>
      <div className='flex relative'>
        <Image src='/assets/images/Vector 7.png' alt='' width={1260} height={840} />
      </div>
    </div>
  )
};

export default Header;
