import React, { useState } from "react";

const HOC = (PropComponent) => {
  return (props)=>{
    const [likeCount, setLikeCount] = useState(0);
  const handleClick = () => {
    setLikeCount((prev) => prev + 1);
  };
  return <PropComponent {...props} likeCount={likeCount} handleClick={handleClick} />;
}
};

export default HOC;
