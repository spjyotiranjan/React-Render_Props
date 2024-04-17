import React, { useState } from 'react'
import HOC from './HOC'

function LikePost({handleClick,likeCount}) {
  return (
    <div>
      <button onClick={handleClick}>Like Post {likeCount}</button>
    </div>
  )
}

export default HOC(LikePost)
