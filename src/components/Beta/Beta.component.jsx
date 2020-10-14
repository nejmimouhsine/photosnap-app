import React from 'react';
import Button from '../Button/Button.component';

import './Beta.styles.scss';

function Beta() {
    return (
        <section className='beta'>
            <div className='beta__content'>
                <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>

                <Button className="beta__btn" type="submit">
                    get an invite
                    <svg className="beta__arrow" xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                </Button>
            </div>
        </section>
    )
}

export default Beta
