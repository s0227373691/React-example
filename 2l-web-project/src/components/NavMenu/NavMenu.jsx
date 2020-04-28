import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css_scss/NavMenu.css';

class NavMenu extends Component {


    render() {
        return (
            <nav>
                <h1>KUSHINE</h1>
                <ul>
                    <li>
                        <Link to='/hot'>HOT</Link>
                    </li>
                    <li>
                        <Link to='/newarrivals'>NEW ARRIVALS</Link>
                    </li>
                    <li>
                        <Link to='/allproducts'>ALL PRODUCTS</Link>
                    </li>
                    <li>
                        <Link to='/mensstyle'>MEN'S STYLE</Link>
                    </li>
                    <li>
                        <Link to='/madamsstyle'>MADAM'S STYLE</Link>
                    </li>
                    <li>
                        <Link to='/couple'>COUPLE</Link>
                    </li>
                    <li>
                        <Link to='/accessories'>ACCESSORIES</Link>
                    </li>
                    <li>
                        <Link to='/newdiscount'>NEW DISCOUNT</Link>
                    </li>
                    <li>
                        <Link to='/oddsizes'>ODD SIZES</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default NavMenu;
