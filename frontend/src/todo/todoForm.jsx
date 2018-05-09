import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10 11'>
            <input id='description' className='form-control' placeholder='Add a task' value={props.description} onChange={props.handleChange}></input>
        </Grid>

        <Grid cols="12 3 2 1">
            <IconButton show={true} style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            <IconButton show={true} style='info' icon='search' onClick={props.handleSearch}></IconButton>
        </Grid>
    </div>
)