import React,{createContext, useState} from "react";
import classNames from "classnames";
type MenuModel="horizontal"|"vertical"

type SelectCallback=(selectIndex:number)=>void

export interface MenuProps{
    defaultIndex?:number;
    className?:string;
    mode?:MenuModel;
    style?:React.CSSProperties;
    //用户自定义事件onSelect
    onSelect?:SelectCallback
} 

interface IMenuContext{
    index:number,
    onSelect?:SelectCallback
}

export const MenuContext=createContext<IMenuContext>({
    index:0
})

const Menu:React.FC<MenuProps>=(props)=>{
    const { className,mode,style,children,defaultIndex,onSelect}=props
    const [currentActive,setActive]=useState(defaultIndex)
    const classess=classNames("viking-menu",className,{
        "menu-vertical":mode==="vertical",
    })
    const handleClick=(index:number)=>{
        setActive(index)
        //用户自定义事件
        if(onSelect){
            onSelect(index)
        }
    }
    const pastContext:IMenuContext={
        index:currentActive?currentActive:0,
        onSelect:handleClick
    }
    return(
        <ul className={classess} style={style}>
            <MenuContext.Provider value={pastContext}>
            {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps={
    defaultIndex:0,
    mode:"horizontal"
}
export default Menu