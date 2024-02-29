import { FeedbackCard } from "./parts/FeedbackCard";
import BoxWithCorners from "./parts/box-with-corners/BoxWithCorners";

export const testymonialsList = [
  {
    name: "Courtney Henry",
    avatarUrl: "/assets/images/avatar.png",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 5,
  },
  {
    name: "Courtney Henry",
    avatarUrl: "",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 4.7,
  },
  {
    name: "Courtney Henry",
    avatarUrl: "/assets/images/avatar.png",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 3.3,
  },
  {
    name: "Courtney Henry",
    avatarUrl: "/assets/images/avatar.png",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2.5,
  },
];

export const Testymonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <BoxWithCorners>Testymonials</BoxWithCorners>
      <div className="grid grid-cols-2 mt-10">
        {testymonialsList.map((element, index) => (
          <FeedbackCard key={index} {...element} />
        ))}
      </div>
    </div>
  );
};
