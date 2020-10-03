import React, { Component } from 'react';
import Button from '../../Button/Button.component';

import './Homepage.style.scss';

import backgroundImg1 from "../../../assets/home/desktop/create-and-share.jpg";

class Homepage extends Component {
    render() {
        return (
            <section key={Math.random()} className="hero-create">
                <div className="hero-content">
                    <h1 className="hero-content-title">CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p className="hero-content-para">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <Button className="move-btn" type="submit">
                        get an invite 
                        <span className="btn-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </span>
                    </Button>
                </div>

                <div className="hero-image">
                    <img className="hero-image-img" src={backgroundImg1} alt="BackgroundImage" />
                </div>
            </section>
        )
    }
}

export default Homepage;