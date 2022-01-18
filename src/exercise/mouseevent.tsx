import React, { memo,useState,useEffect } from 'react'

const MouseTracker:React.FC=()=>{
    const [pos, setPos] = useState({x:0,y:0})
    useEffect(() => {
        const upmouse=(e:MouseEvent)=>{
            console.log("inner");
            setPos({x:e.clientX,y:e.clientY})
        }
        document.addEventListener("click",upmouse)
        return ()=>{
            document.removeEventListener("click",upmouse)
        }
    }, [])
    return(
        <p>{pos.x}+{pos.y}</p>
    )
}
export default MouseTracker
