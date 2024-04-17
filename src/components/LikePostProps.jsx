import React from 'react'
import RenderProps from './RenderProps'

const LikePostProps = () => {
  return (
    <RenderProps>
        {({likeCount,handleClick})=>{
            return <div>
            <button onClick={handleClick}>Like Image {likeCount}</button>
          </div>
        }}
    </RenderProps>
  )
}

export default LikePostProps