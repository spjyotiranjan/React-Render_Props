import React, { useState } from "react";

const RenderProps = ({ children }) => {
  const [likeCount,setLikeCount] = useState(0);

  const handleClick = () => {
    setLikeCount((prev) => prev + 1);
  };
  return children({likeCount,handleClick});
};

export default RenderProps;
