import { Button } from "@/components/ui/button";
import Image from "next/image";


const ContactUs = () => {
  return (
    <section className="flex flex-col relative items-center justify-center mt-10">
      <div className="relative text-4xl font-bold">
        <span className="relative z-10 text-[74px] font-black text-[#6D91EE]">
          Contact Us
        </span>
        <div className="absolute -top-2 -left-3 w-[25px] h-[2px] bg-blue-500 transform -rotate-45"></div>
        <div className="absolute -top-2 -right-3 w-[25px] h-[2px] bg-blue-500 transform rotate-45"></div>
        <div className="absolute -bottom-2 -left-3 w-[25px] h-[2px] bg-blue-500 transform rotate-45"></div>
        <div className="absolute -bottom-2 -right-3 w-[25px] h-[2px] bg-blue-500 transform -rotate-45"></div>
      </div>

      <div className="flex items-center justify-center w-[790px] h-[270px] mt-10">
        <div className="flex flex-col w-[375px] h-[260px] space-y-4">
          <Button className="w-[375px] h-[55px] bg-[#CEDCFF] rounded-[60px] hover:bg-[#CEDCFF]"></Button>
          <Button className="w-[375px] h-[55px] bg-[#CEDCFF] rounded-[60px] hover:bg-[#CEDCFF]"></Button>
          <Button className="w-[375px] h-[55px] bg-[#CEDCFF] rounded-[60px] hover:bg-[#CEDCFF]"></Button>
          <div className="flex items-center justify-center">
          <Button className="w-[170px] h-[55px] bg-[#FCFCFC] rounded-[60px] border-4 border-[#5180F6] hover:bg-[#FCFCFC]">
          </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-16 space-y-10 ml-[160px]">
          <div className="flex gap-4">
            <Image src='/assets/images/mail_icon.png' alt="" width={20} height={15} />
            <p className="">
              test@gmail.com
            </p>
          </div>
          <div className="flex gap-4">
            <Image src='/assets/images/phone_icon.png' alt="" width={18} height={18} />
            <p className="">
              (303) 555-0105
            </p>
          </div>
          <div className="flex gap-4">
            <Image src='/assets/images/location_icon.png' alt="" width={14} height={19} />
            <p className="">
              (303) 555-0105
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactUs;
