import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this) //make sure that this references the Todo class, not the scope of the handleAdd onClick call (which is null)
    }
    
    handleAdd() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name="Add a todo" small="or not"/>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}