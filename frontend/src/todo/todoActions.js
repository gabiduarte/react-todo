import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => { //possivel por causa do thunk - nao vai devolver uma ação de cara e sim fazer novos dispatches que vao trabalhar de forma assincrona
        axios.post(URL, {description})
            .then( res => dispatch({ type: 'TODO_ADDED', payload: res.data}))
            .then( res => dispatch(search()));
    }
}

export const toggleTodoState = (todo, isDone) => {
    const actionName = isDone ? 'TODO_MARKED_AS_DONE' : 'TODO_MARKED_AS_PENDING';

    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: isDone})
            .then(res => dispatch({ type: actionName}))
            .then(res => dispatch(search()));
    }
}