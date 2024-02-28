'use client';

import React from 'react';
import ServicesCard from './parts/servicesCard';
import { Button } from '@/components/ui/button';

interface CardData {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {

  const cardData: CardData[] = [
    {
      id: 1,
      imageSrc: '/assets/images/collect_garbage.jpg',
      title: 'Lorem Ipsum',
      description: 'Do magna commodo voluptate dolor cillum Lorem ad esse est occaecat in dolore commodo ullamco. Veniam occaecat velit consectetur in. Duis dolor aliqua do sit non. Commodo laboris labore reprehenderit quis veniam dolor dolore velit labore pariatur. Magna voluptate esse qui eu. Enim mollit officia minim non aliquip consectetur nisi incididunt consectetur culpa enim excepteur.',
    },
    {
      id: 2,
      imageSrc: '/assets/images/collect_garbage2.jpg',
      title: 'Lorem Ipsum',
      description: 'Do magna commodo voluptate dolor cillum Lorem ad esse est occaecat in dolore commodo ullamco. Veniam occaecat velit consectetur in. Duis dolor aliqua do sit non. Commodo laboris labore reprehenderit quis veniam dolor dolore velit labore pariatur. Magna voluptate esse qui eu. Enim mollit officia minim non aliquip consectetur nisi incididunt consectetur culpa enim excepteur.',
    },
    {
      id: 3,
      imageSrc: '/assets/images/collect_garbage3.jpg',
      title: 'Lorem Ipsum',
      description: 'Do magna commodo voluptate dolor cillum Lorem ad esse est occaecat in dolore commodo ullamco. Veniam occaecat velit consectetur in. Duis dolor aliqua do sit non. Commodo laboris labore reprehenderit quis veniam dolor dolore velit labore pariatur. Magna voluptate esse qui eu. Enim mollit officia minim non aliquip consectetur nisi incididunt consectetur culpa enim excepteur.',
    },
  ];

  return (
    <section className='flex flex-col relative items-center justify-center mt-10'>
      <div className='relative text-4xl font-bold'>
        <span className='relative z-10 text-[44px] font-black text-[#6D91EE]'>
          Services
        </span>
        <div className="absolute -top-2 -left-3 w-[25px] h-[1px] bg-blue-500 transform -rotate-45"></div>
        <div className="absolute -top-2 -right-3 w-[25px] h-[1px] bg-blue-500 transform rotate-45"></div>
        <div className="absolute -bottom-2 -left-3 w-[25px] h-[1px] bg-blue-500 transform rotate-45"></div>
        <div className="absolute -bottom-2 -right-3 w-[25px] h-[1px] bg-blue-500 transform -rotate-45"></div>
      </div>
      <div className='flex items-center justify-center w-[1200px] h-[500px] mt-10 gap-4'>
        {cardData.map((card) => (
          <ServicesCard 
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className='justify-center items-center mt-16'>
        <Button className='w-[280px] h-[86px] rounded-[71px] bg-[#5180F6]'>
          <span className='text-[20px]'>Help Me</span>
        </Button>
      </div>
    </section>
  )
};

export default Services;
