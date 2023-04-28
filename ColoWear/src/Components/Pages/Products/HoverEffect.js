import React, { useState } from "react";

const HoverEffect = ({ src1, src2, alt }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <img
      src={hovering ? src2 : src1}
      alt={alt}
      className="transition duration-1000 ease-in-out w-full h-48 object-cover p-2 rounded-xl cursor-pointer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    />
  );
};

export default HoverEffect;
