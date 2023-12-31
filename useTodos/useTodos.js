import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

//** Información persistente */
const init = () =>  {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
[]
    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
 
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        const deleteTodo =  {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch( deleteTodo );
    }

    const handeleToggleTodo = (id) => {
        const toggleTodo =  {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch( toggleTodo );
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handeleToggleTodo,
        handleDeleteTodo,
        handleNewTodo,
    }
}
