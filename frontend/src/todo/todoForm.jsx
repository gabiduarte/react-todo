import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        if (e.key == 'Enter') this.props.handleAdd();
    }

    render() {
        return (
            <div role='form' className='todoForm'>
    
                <Grid cols='12 9 10 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Add a task'
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}>
                    </input>
                </Grid>
    
                <Grid cols="12 3 2 2">
                    <IconButton show={true} style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton show={true} style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                    <IconButton show={true} style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description}); // description passa a vir do estado do reducer
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);