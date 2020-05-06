import React from 'react';
import styled from 'styled-components';

import NavBtnGroup from './containers/NavBtnGroup';
import NavMenu from './components/NavMenu';
import MainProductCategory from './containers/MainProductCategory';

const App = () => (
  <div>
    <NavBtnGroup />
    <Center>
      <NavMenu />
      <MainProductCategory />
    </Center>
  </div>
);

export default App;


// set Styled-components
const Center = styled.section`
    display: flex;
    flex-direction: row;
`;