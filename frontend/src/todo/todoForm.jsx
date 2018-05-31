import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { changeDescription } from './todoActions'

const TodoForm = props => {
    
    const keyEvent = (e) => {
        if (e.key == 'Enter') props.handleAdd();
    }
    return (
        <div role='form' className='todoForm'>

            <Grid cols='12 9 10 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Add a task'
                    value={props.description}
                    onChange={props.changeDescription}
                    onKeyUp={keyEvent}>
                </input>
            </Grid>

            <Grid cols="12 3 2 2">
                <IconButton show={true} style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton show={true} style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton show={true} style='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description}); // description passa a vir do estado do reducer
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);