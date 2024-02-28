'use clients';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Header = () => {
  return (
    <section className='header w-full h-screen flex-col'>
      <div 
        className='flex relative'
        style={{ 
          backgroundImage: 'url(\'/assets/images/Vector 7.png\')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '1260px',
          height: '840px'
        }}
      >
        <div className='flex absolute w-full h-screen'>
          <div className='flex absolute justify-center items-center w-full left-[19rem] top-[5rem]'>
            <Image src='assets/images/Group 560.svg' alt='' width={450} height={90} />
          </div>
          <div className='flex absolute justify-center items-center w-full left-[20rem] top-[18rem]'>
              <Button className='w-[160px] h-[50px] rounded-[20px] bg-[#6D91EE]'>
                <span className='text-[20px]'>Experts</span>
              </Button>
          </div>
          <div className='flex flex-col absolute justify-center items-center w-full leading-[89px] left-[20rem] top-[23rem]'>
            <span className='text-[96px] text-[#4F4F4F] font-thin'>
              Lorem
            </span>
            <span className='text-[96px] font-black text-[#4F4F4F]'>
              Lorem lorem
            </span>
          </div>
          <div className='flex absolute justify-center text-center w-[520px] left-[43rem] top-[36rem]'>
            <p className='text-[18px] font-semibold text-[#4F4F4F]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
          </div>
          <div className='flex absolute justify-center items-center left-[50rem] top-[43rem]'>
            <Button className='w-[280px] h-[86px] rounded-[71px] bg-[#5180F6]'>
              <span className='text-[20px]'>Help Me</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Header;
