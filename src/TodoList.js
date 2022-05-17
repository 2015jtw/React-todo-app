import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        // bind funcs
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    // create task func
    create(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            else {
                return todo;
            }
        });
        this.setState({ todos: updatedTodos });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            else {
                return todo;
            }
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                delete={this.remove}
                updateTodo={this.update}
                toggleCompletion={this.toggleCompletion}
            />
        ))

        return (
            <div className='TodoList'>
                <h1>ToDo List! <span>A Simple React ToDo List App</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm
                    createTask={this.create}
                />
            </div>
        )
    }
}

export default TodoList;