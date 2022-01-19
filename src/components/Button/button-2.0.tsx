import React from "react";
import classNames from 'classnames';

export enum ButtonType{
    Primary = "primay",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
export enum ButtonSize{
    Large = "lg",
    Small = "sm"
}
interface BaseButtonProps{
    classNames?:string,
    disabled?:boolean,
    size?:ButtonSize,
    btnType?:ButtonType,
    children:React.ReactNode,
    href?:string
}

//Buttonprops,不止这些属性，怎么全部传进去，使用官方接口
type NativeButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps=BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
//Partial,ts工具，改成都是可选的
export type ButtonProps=Partial<NativeButtonProps & AnchorButtonProps>



const Button:React.FC<ButtonProps>=(props)=>{
    const {
        btnType,
        disabled,
        size,
        children,
        className,
        href,
        ...restProps
    } = props
    const classes =classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType ==='link') && disabled
      })
      if(btnType===ButtonType.Link&&href){
          return(<a className={classes} href={href} {...restProps}>{children}</a>)
      }else{
          return(<button className={classes} disabled={disabled} {...restProps}>{children}</button>)
      }
}
Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default
}
export default Button