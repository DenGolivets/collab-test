import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "./StarRating";

interface FeedbackCardProps {
  name: string;
  avatarUrl?: string;
  feedback: string;
  rating: number;
}

export const FeedbackCard = ({
  name,
  avatarUrl,
  feedback,
  rating,
}: FeedbackCardProps) => {
  const onlyFirstLetters = (
    name.charAt(0) + name.charAt(name.indexOf(" ") + 1)
  ).toUpperCase();

  return (
    <div className="w-[577px] h-[233px] m-4 p-4 flex items-start justify-start border border-[#6D91EE] rounded-3xl">
      <div className="m-3 ">
        <Avatar className="w-[80px] h-[80px]">
          <AvatarImage src={avatarUrl} alt="avatar" />
          <AvatarFallback delayMs={600}>{onlyFirstLetters}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="mb-3">{name}</p>
        <p className="mb-3">{feedback}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};
