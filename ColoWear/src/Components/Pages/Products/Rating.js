import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {rating > i ? (
            <AiFillStar className="text-orange-500 text-xl" />
          ) : (
            <AiOutlineStar className="text-xl" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
