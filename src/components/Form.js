import React, { Component } from "react";
import { connect } from "react-redux";
import './Form.css'


import swal from "sweetalert";

import { AddTodoApi} from "../actions";

class Form extends Component {
  constructor() {
    super();
    
    this.state = {
      text: "",
      id: "",
      updateText: "",
      idNo: 200,
    };
  }

  
  handleAddTask = async () => {
    await this.setState({
      idNo: this.state.idNo + 1,
    });
    const { text, idNo } = this.state;
    if (text === "") {
      swal("Please Enter Task Title");
      return;
    }
    const length = idNo;
    await this.props.dispatch(AddTodoApi(text, length));
    this.setState({
      text: "",
    });
    console.log("statt", this.state);
  };

  
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  e
  handleIdChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

 
  whatUpdate = (e) => {
    this.setState({
      updateText: e.target.value,
    });
  };

  
  render() {
    return (
      <div className="Form">
        <div className="Form_header">
          <div className="title" style={{ width: "300px" }}>
            <h2>Add a new task in the list</h2>
          </div>
        </div>

        <div className="form_input">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the task here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button
            className="form-button"
            type="button"
            id="button-addon2"
            onClick={this.handleAddTask}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    list: state.list,
  };
}


const connectedComponent = connect(mapStateToProps)(Form);

export default connectedComponent;
