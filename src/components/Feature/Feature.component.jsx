import React from 'react';
import { FeatureData } from './FeatureData';

import './Feature.styles.scss';

function Feature() {
    return (
        <section className="feature">
            {FeatureData.map((item, index) => (
                <div className="feature__item" key={index}>
                    <div className="feature__image">
                        <img 
                            src={item.src}
                            alt="Photosnap Features"
                        />
                    </div>

                    <div className="feature__content">
                        <h4>{item.title}</h4>
                        <p>{item.para}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Feature
