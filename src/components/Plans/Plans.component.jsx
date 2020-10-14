import React from 'react';
import Button from '../Button/Button.component';
import './Plans.styles.scss';

function Plans(
    {
        planCName,
        type,
        feature,
        price,
        time,
        btnCName
    }
    ) {
    return (
        <div className={planCName}>
            <div className="plan__info">
                <h5 className="plan__type">{type}</h5>
                <p className="plan__feature">{feature}</p>
                <Button className={btnCName} type="submit">pick plan</Button>
            </div>
            
            <div className="plan__pay">
                <h3 className="plan__price">{price}</h3>
                <p className="plan__time">{time}</p>
            </div>
        </div>
    )
}

export default Plans
