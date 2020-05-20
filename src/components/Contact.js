import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked,
    });
  };
  render() {
    var {isChecked} = this.state;
    return (
      <div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.onClick(false)}
        >
          Cho Phép
        </button>
        <br />
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => this.onClick(true)}
        >
          Không Cho Phép
        </button>
        <Prompt
          when={isChecked}
          message={location =>
           ( `Bạn có chắc chắn muốn đi đến ${location.pathname}`)
          }
        />
        <br />
      </div>
    );
  }
}

export default Contact;
