import React from 'react';
import './Button.style.scss';

const Button = ({
    children,
    type,
    onClick,
    className,
}) => {
    return (
        <button className={className} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button;