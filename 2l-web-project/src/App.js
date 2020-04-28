import React from 'react';

import NavBtnGroup from './containers/NavBtnGroup/NavBtnGroup.jsx';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import MainProductCategoryContent from './containers/MainProductCategoryContent/MainProductCategoryContent.jsx';

import './App.css';

const App = () => (
  <div>
    <NavBtnGroup />
    <section className='center'>
      <NavMenu />
      <MainProductCategoryContent />
    </section>
  </div>
);


export default App;
