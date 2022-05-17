import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        // bind funcs for render
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }

    // render funcs
    handleRemove() {
        this.props.delete(this.props.id);
    }

    handleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        // take new task data and pass up to parent component
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    handleCompletion(evt) {
        this.props.toggleCompletion(this.props.id);
    }




    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            onChange={this.handleChange}
                            name="task"
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleCompletion}>{this.props.task}</li>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            )

        }

        return result;
    }
}

export default Todo;