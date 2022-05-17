import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        // bind funcs
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // form functions
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), completed: false }
        this.props.createTask(newTodo);
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='task'>New Todo: </label>
                    <input
                        type="text"
                        name="task"
                        placeholder='Enter a Task'
                        value={this.state.task}
                        id="task"
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </div>

            </form>
        )
    }
}

export default NewTodoForm;