import React from "react";
import Star from "../UI/Star";

interface ICourseRattingProps {
  rating: number;
}

export default function StarRating(props: ICourseRattingProps) {
  const { rating } = props;
  const flooredRate = Math.floor(rating);
  const getStarColor = (starIndex: number) => {
    if (starIndex <= flooredRate - 1) {
      return "yellow";
    } else {
      return "none";
    }
  };

  return (
    <div className="flex ">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          fill={getStarColor(index)}
          stroke={"black"}
          width={1.5}
        />
      ))}
    </div>
  );
}
