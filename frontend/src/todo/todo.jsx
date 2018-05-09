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
        this.handleAdd = this.handleAdd.bind(this) 
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.toggleTodoState = this.toggleTodoState.bind(this)

        this.refresh(this.state.description);
    }

    toggleTodoState(todo, isDone) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: isDone}).then( res => this.refresh(this.state.description));
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then( res => this.setState({...this.state, description, list: res.data}));
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleDelete(todo) {
        axios.delete(`${URL}/${todo._id}`).then(res => this.refresh(this.state.description));
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value});
    }

    handleClear() {
        this.refresh();
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL, { description: description}).then((res) => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name="Add a todo" small="or not"/>
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <TodoList 
                    list={this.state.list} 
                    handleDelete={this.handleDelete} 
                    toggleTodoState={this.toggleTodoState}/>
            </div>
        )
    }
}