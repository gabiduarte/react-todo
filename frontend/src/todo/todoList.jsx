import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'

const TodoList = props => {

    const renderRows = (list) => {
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>

                    <td>
                        <IconButton show={!todo.done} style="success" icon="check" onClick={() => props.toggleTodoState(todo, true)}/>
                        <IconButton show={todo.done} style="warning" icon="undo" onClick={() => props.toggleTodoState(todo, false)}/>
                        <IconButton show={todo.done} style="danger" icon="trash-o" onClick={() => props.handleDelete(todo)}/>
                    </td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Action</th>
                </tr>
            </thead>

            <tbody>
                {renderRows(props.list)}
            </tbody>
        </table>
    )
}

const mapSTateToProps = state => ({ list: state.todo.list }) // passa a pegar do reducer, ao invés do props list.

export default connect(mapSTateToProps)(TodoList);