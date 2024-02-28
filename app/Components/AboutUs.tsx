import { Button } from "@/components/ui/button";
import { url } from "inspector";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div
      className="w-full h-[840px] bg-no-repeat flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(/assets/images/background-gradient-image.png) ,url(/assets/images/background-image.png) `,
        backgroundSize: "65% 840px, cover",
        backgroundPosition: "right, center",
      }}
    >
      <div className="flex justify-center p-4">
        <div className="flex-1 ml-[20%]">
          <p className="text-6xl mt-16 mb-10 text-neutral-100">About Us</p>
          <p className="mb-10 text-neutral-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an{" "}
          </p>
          <Image
            src={"/assets/images/about-us-image.svg"}
            alt="trash"
            width={419}
            height={282}
          />
        </div>
        <div className="flex-1 mr-[20%] text-right">
          <p className="text-6xl mt-48 mb-10 text-neutral-100">Where</p>
          <p className="text-neutral-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="mb-16">
        <Button size={"lg"} variant={"yellow"}>
          Help Me
        </Button>
      </div>
    </div>
  );
};
