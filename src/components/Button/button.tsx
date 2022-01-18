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
interface ButtonProps{
    classNames?:string,
    disabled?:boolean,
    size?:ButtonSize,
    btnType?:ButtonType,
    children:React.ReactNode,
    href?:string
}
const Button:React.FC<ButtonProps>=(props)=>{
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props
    const classes =classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
      })
      if(btnType===ButtonType.Link&&href){
          return(<a className={classes} href={href}>{children}</a>)
      }else{
          return(<button className={classes} disabled={disabled}>{children}</button>)
      }
}
Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default
}
export default Button