import React, { Component } from "react";
import { connect } from "react-redux";

import TodoCard from "./TodoCard";
import Form from "./Form";

import "./App.css"
import { HandleTodoApi, HandleDelete, CompleteTask } from "../actions";

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(HandleTodoApi());
  }

  handleDeleteTask = (id) => {
    this.props.dispatch(HandleDelete(id));
  };

  
  handleCompleteTask = (id) => {
    this.props.dispatch(CompleteTask(id));
  };

  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <div className="App_header">
          <div className="header_title" >
            <h1>TODO-LIST</h1>
          </div>
        </div>
        <div className="add_task">
          
          <div className="add_task_value">
            <Form />
          </div>
          <h2>Added task in todo-list</h2>
          <div id="todo-container">
          
           
            {list?.map((listItem, index) =>index<50 && (
              
              
                <div className="card1s">
                <h3 className="number">{index+1}.</h3>
                <div className="card">
                <TodoCard
                  list={listItem}
                  key={listItem.id}
                  index={index}
                  delete={this.handleDeleteTask}
                  complete={this.handleCompleteTask}
                />
                </div>
              </div>
              ))}
          </div>
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

const connectedComponent = connect(mapStateToProps)(App);
export default connectedComponent;
