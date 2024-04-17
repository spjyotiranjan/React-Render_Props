import React from 'react'
import RenderProps from './RenderProps'

const LikeImageProps = () => {
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

export default LikeImageProps