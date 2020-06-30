import React from 'react'
import styled from "styled-components";

import BackDrop from './BackDrop';

const HotelDetailInfo = ({ show,modalClose }) => {

  return (
    show ? (<Container>
      <Modal>
        <h2>HotelDetailInfo</h2>
      </Modal>
      <BackDrop show={show} clicked={modalClose} />
    </Container>) : null

  );
}

export default HotelDetailInfo;

const Container = styled.div``;

const Modal = styled.section`
  width: 500px;
  padding: 25px;   
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: calc(50% - 250px);
  background-color: white;
`;
