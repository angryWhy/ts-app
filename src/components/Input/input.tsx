import React,{InputHTMLAttributes, ReactElement} from "react"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
type InputSize = "large" | "small"
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,"size">{
    disabled?:boolean,
    size?:string
    icon?:"fontawesome",
    prepand?:string | ReactElement,
    append?:string | ReactElement
} 
export const Input :React.FC<InputProps> = ()=>{
    return(<div></div>)
}