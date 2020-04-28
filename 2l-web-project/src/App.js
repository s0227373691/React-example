import React from 'react';

import NavBtnGroup from './containers/NavBtnGroup/NavBtnGroup.jsx';
import NavProductCategory from './components/NavProductCategory/NavProductCategory.jsx';
import MainProductCategoryContent from './containers/MainProductCategoryContent/MainProductCategoryContent.jsx';

import './App.css';

const App = () => (
  <div>
    <NavBtnGroup />
    <section className='center'>
      <NavProductCategory />
      <MainProductCategoryContent />
    </section>
  </div>
);


export default App;
