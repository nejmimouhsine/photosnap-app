import React from 'react';
import './Button.style.scss';

const Button = ({
    type,
    onClick,
    className,
}) => {
    return (
        <button className={className} onClick={onClick} type={type}>get an invite</button>
    )
}

export default Button;