import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Route
import Hot from '../../mainpages/Hot/Hot.jsx';
import Accessories from '../../mainpages/Accessories/Accessories.jsx';
import AllProducts from '../../mainpages/AllProducts/AllProducts.jsx';
import Couple from '../../mainpages/Couple/Couple.jsx';
import MadamsStyle from '../../mainpages/MadamsStyle/MadamsStyle.jsx';
import MensStyle from '../../mainpages/MensStyle/MensStyle.jsx';
import NewArrivals from '../../mainpages/NewArrivals/NewArrivals.jsx';
import NewDiscount from '../../mainpages/NewDiscount/NewDiscount.jsx';
import OddSizes from '../../mainpages/OddSizes/OddSizes.jsx';

import AboutUs from '../../mainpages/AboutUs/AboutUs.jsx';
import NotFoundPage from '../../mainpages/NotFoundPage/NotFoundPage.jsx';

import './css_scss/MainProductCategoryContent.css';


const MainProductCategoryContent = () => {
    return (
        <main>
            <div className='emptydiv'></div>
            <Switch>
                <Route exact path='/hot' component={Hot} />
                <Route exact path='/accessories' component={Accessories} />
                <Route exact path='/allproducts' component={AllProducts} />
                <Route exact path='/couple' component={Couple} />
                <Route exact path='/madamsstyle' component={MadamsStyle} />
                <Route exact path='/mensstyle' component={MensStyle} />
                <Route exact path='/newarrivals' component={NewArrivals} />
                <Route exact path='/newdiscount' component={NewDiscount} />
                <Route exact path='/oddsizes' component={OddSizes} />
                <Route path='/about' component={AboutUs} />
                <Route component={NotFoundPage} />
            </Switch>
        </main>
    )
}

export default MainProductCategoryContent;
