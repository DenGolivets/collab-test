'use client';

import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import Image from "next/image";

interface ServicesCardProps {
  imageSrc: string;
  description: string;
}

const ServicesCard = ({imageSrc, description}: ServicesCardProps) => {
  return (
    <div className="mt-10">
      <Card className="w-[380px] h-[500px] rounded-[20px] shadow-xl border-0 border-transparent transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
        <Image 
          src={imageSrc} 
          alt="" 
          width={380} 
          height={500} 
          className="border-none border-t rounded-t-[20px]" 
        />
        <CardContent>
          <CardDescription className="mt-4">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
      </div>
  )
};

export default ServicesCard;
