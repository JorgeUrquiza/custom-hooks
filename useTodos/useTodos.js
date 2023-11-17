import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => { // Función que se ejecuta cuando se carga el componente
    return JSON.parse(localStorage.getItem('todos')) || []; // Si no hay nada en el localStorage, regresa un arreglo vacío
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init);


    useEffect(() => { // Se ejecuta cuando cambia el estado de los todos        
        localStorage.setItem('todos', JSON.stringify( todos ) ); // Guarda los todos en el localStorage
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {  // Crea la acción
            type: 'add Todo',
            payload: todo,
        }

        dispatch( action ); // Manda la acción al reducers
    }

    const handleRemoveTodo = ( id ) => {
        dispatch({
            type: 'remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = ( id ) => {
        // console.log({id});
        dispatch({
            type: 'toggle Todo',
            payload: id,
        })
    }



  return{
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
  
}
