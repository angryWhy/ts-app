import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
export interface MenuItemProps{
    index:number,
    disabled?:boolean,
    className?:string,
    style?:React.CSSProperties,
}

const MenuItem:React.FC<MenuItemProps>=(props)=>{
    //index,传入的值
    const {index,disabled,className,style,children}=props
    const context = useContext(MenuContext)
    const classes=classNames("menu-item",className,{
        "is-disabled":disabled,
        "is-active":context.index===index
    })
    const handleClick = () =>{
        //context.onSelect:handleClick,对应Menu中的context函数
        if(context.onSelect&&!disabled){
            context.onSelect(index)
        }
    }
    return(
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}
export default MenuItem