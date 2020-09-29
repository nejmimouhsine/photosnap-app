import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import Button from '../Button/Button.component';

import Logo from '../../assets/shared/desktop/logo.svg';
import Menu from '../../assets/shared/mobile/menu.svg';
import Close from '../../assets/shared/mobile/close.svg';

import './Navbar.style.scss';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <header className="header">
                <div className="Navbar-icon" onClick={this.handleClick}>
                    <img src={this.state.clicked ? Close : Menu} alt="Photosnap Menu" />
                </div>

                <nav className="NavbarItems">
                    <div className="Navbar-logo">
                        <img src={Logo} alt="Photosnap" />
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu acitve' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button className="cta-btn" type="submit">get an invite</Button>
                </nav>
            </header>
        )
    }
}

export default Navbar;
