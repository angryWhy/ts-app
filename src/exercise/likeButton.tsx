import React, { memo, useState } from 'react'

const LikeButton:React.FC=memo(()=>{
    const [show, setShow] = useState(false)
    const [like, setLike] = useState(1)
    if(like==1){}
    return(<div>
        <button onClick={e=>{setShow(!show)}}>{show}111</button>
        <button onClick={e=>{setLike(like+1)}}>{like}</button>
    </div>)
})
export { LikeButton}
