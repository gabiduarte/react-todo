import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const {add, description} = this.props;
        if (e.key == 'Enter') add(description);
    }

    render() {
        const {add, description, search, clear} = this.props;

        return (
            <div role='form' className='todoForm'>
    
                <Grid cols='12 9 10 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Add a task'
                        value={description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}>
                    </input>
                </Grid>
    
                <Grid cols="12 3 2 2">
                    <IconButton show={true} style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton show={true} style='info' icon='search' onClick={() => search()}></IconButton>
                    <IconButton show={true} style='default' icon='close' onClick={() => clear()}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description}); // description passa a vir do estado do reducer
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);