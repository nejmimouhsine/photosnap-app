import React from 'react';

import { FeaturesData } from '../../Feature/FeatureData';

import '../homepage/Homepage.style.scss';
import '../../Feature/Feature.styles.scss';
import './Features.styles.scss';
import Beta from '../../Beta/Beta.component';

function Features() {
    return (
        <>
            <section className="features hero">
                <div className="features__content hero__content">
                    <h1 className="features__title hero__title">Features</h1>
                    <p className="features__para hero__para">We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                </div>
                
                <div className="features__image hero__image">
                </div>
            </section>

            <section className="feature features__feature">
                {FeaturesData.map((item, index) => (
                    <div className="feature__item features__item" key={index}>
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
            
            <Beta />
        </>
    )
}

export default Features

