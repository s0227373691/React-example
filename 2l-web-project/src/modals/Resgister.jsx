import React, { Component, Fragment } from "react";
import styled from "styled-components";

import BackDrop from './BackDrop';

class Resgister extends Component {

  render() {
    return (
      this.props.show ?
        (<Fragment>
          <Modal>
            Register
          </Modal>
          <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        </Fragment>) : null
    );
  }
};

export default Resgister;


const Modal = styled.section`
  width: 500px;
  padding: 25px;   
  border-radius: 5px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: calc(50% - 250px);
  background-color: white;
`;
