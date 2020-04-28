import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import UseAnimations from 'react-useanimations';

import './css_scss/Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menupaneldisplayer: 'none'
        }
    }

    onMenuBtnClick = () => {
        //change menu state
        if (this.state.menupaneldisplayer === 'none') {
            this.setState({ menupaneldisplayer: 'block' });
        } else {
            this.setState({ menupaneldisplayer: 'none' });
        }
    }

    render() {
        return (
            <div className='menu'>
                <ul className='menupanel' style={{ display: this.state.menupaneldisplayer }}>
                    <li>
                        <Link to='/'>首頁</Link>
                    </li>
                    <li>
                        <Link to='/news'>最新消息</Link>
                    </li>
                    <li>
                        <Link to='/about'>關於我們</Link>
                    </li>
                    <li>
                        <Link to='/contact'>聯絡我們</Link>
                    </li>
                </ul>
                <div className='menubtn' onClick={this.onMenuBtnClick}>
                    <UseAnimations
                        animationKey="menu2"
                        size={50}
                        style={{ cursor: "pointer", padding: 25, color: "black" }}
                    />
                </div>
            </div>
        );
    }
}

export default Menu;
