import React,{createContext, useState} from "react";
import classNames from "classnames";
import { MenuItemProps } from './MenuItem';
type MenuModel="horizontal"|"vertical"

type SelectCallback=(selectIndex:string)=>void

export interface MenuProps{
    defaultIndex?:string  ;
    className?:string;
    mode?:MenuModel;
    style?:React.CSSProperties;
    //用户自定义事件onSelect
    onSelect?:SelectCallback
    defalutOpenSubMenus?:string[]
} 

interface IMenuContext{
    index:string,
    onSelect?:SelectCallback,
    mode?:MenuModel,
    defalutOpenSubMenus?:string[]
}

export const MenuContext=createContext<IMenuContext>({
    index:"0"
})

const Menu:React.FC<MenuProps>=(props)=>{
    const { className,mode,style,children,defaultIndex,onSelect,defalutOpenSubMenus}=props
    const [currentActive,setActive]=useState(defaultIndex)
    const classess=classNames("viking-menu",className,{
        "menu-vertical":mode==="vertical",
        'menu-horizontal': mode !== 'vertical',
    })
    const handleClick=(index:string)=>{
        setActive(index)
        //用户自定义事件
        if(onSelect){
            onSelect(index)
        }
    }
    const pastContext:IMenuContext={
        index:currentActive?currentActive:"0",
        onSelect:handleClick,
        mode,
        defalutOpenSubMenus
    }
    //渲染MenuItem
    const renderChildren = () => {
        //使用React.Children来遍历children，官方提供
        return React.Children.map(children,(child,index)=>{
            const childElement=child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if(displayName==="MenuItem" || displayName==="SubMenu"){
                return React.cloneElement(childElement,{index:index.toString()})
            }else{
                console.log("warning :menu has child which is not menuitem component");
            }
        })
    }
    return(
        <ul className={classess} style={style}>
            <MenuContext.Provider value={pastContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps={
    defaultIndex:"0",
    mode:"horizontal",
    defalutOpenSubMenus:[]
}
export default Menu