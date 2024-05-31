import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        todoList: [],
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Learning <code>ReactJS</code> To-Do App
                    </p>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="main-content">
                            <label className="form-label">Input thing to do</label>
                            <form className="mb-3" onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        name="task"
                                        className="form-control"
                                        placeholder="Thing to do..."
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"></input>
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="submit"
                                        id="button-addon2">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                        <ul className="list-group list-task">
                            {this.state.todoList.map((item, index) => {
                                return (
                                    <li className="list-group-item task=items" key={index}>
                                        {item}
                                        <button
                                            className="btn btn-danger float-right"
                                            onClick={(event) => {this.deleteTask(event, index)}}>
                                            Delete
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    handleSubmit = (event) => {
        var task = event.target.elements.task.value;
        if (task.length > 0) {
            this.setState((prevState) => ({
                todoList: [...prevState.todoList, task],
            }));
            event.target.reset();
        }
        event.preventDefault();
    };

    deleteTask = (event, index) => {
      event.preventDefault();
        var tasks = [...this.state.todoList];
        tasks.splice(index, 1);
        this.setState({ todoList: tasks });
    };
}

export default App;

