import React from "react";

import { Button, Collapse } from "react-bootstrap";
import { FaArrowCircleDown, FaThinkPeaks } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

class ClsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange() {
    const newState = { open: !this.state.open };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => this.handleButtonChange()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
          style={{ width: "800px", textAlign: "right" }}
        >
          click {this.state.open ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ClsExample;
