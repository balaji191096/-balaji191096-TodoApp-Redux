//Add task
const ADD_TODO = "ADD_TODO"
export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id:Math.random(),
});

// Delete Task
 const DELETE_TODO = "DELETE_TODO"
 export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});
