import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

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
        const description = this.state.description;

        axios.post(URL, { description: description}).then((res) => console.log('yay'));
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