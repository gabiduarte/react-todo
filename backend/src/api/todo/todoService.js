const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //when there's an update, the returned object will be the new one, and the validations of the schema will run normally.

module.exports = Todo
