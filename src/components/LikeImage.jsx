import React, { useState } from 'react'
import HOC from './HOC'

function LikeImage({handleClick,likeCount}) {


  return (
    <div>
      <button onClick={handleClick}>Like Image {likeCount}</button>
    </div>
  )
}


export default HOC(LikeImage)