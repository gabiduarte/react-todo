import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: []} //initial state of todos.
        this.handleAdd = this.handleAdd.bind(this) //make sure that this references the Todo class, not the scope of the handleAdd onClick call (which is null)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value});
    }

    handleAdd() {
        console.log(this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader name="Add a todo" small="or not"/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }
}