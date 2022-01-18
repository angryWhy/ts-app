import React, {} from 'react'
interface IhelloProps{
    message?:string
}
export default function Hello(props:any){
    return (
        <div>
            <h2>{props.message}</h2>
        </div>
    )
}
const He:React.FunctionComponent<IhelloProps>=(props)=>{
    return(
        <div></div>
    )
}
Hello.defaultProps={
    message:"123"
}