

export const todoReducer = ( initialState = [], action) => {

    switch (action.type) {
        case 'add Todo':
            return [...initialState, action.payload];

        case 'remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); // podemos usarlo por que el filter regresa un nuevo arreglo no lo muta 
        
        case 'toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) { // si el id del todo es igual al id que estoy recibiendo en el payload
                    return {
                        ...todo, 
                        done: !todo.done // si estaba en true lo pone en false y viceversa
                    }
                }
                return todo;
            });
        
        default:
            return initialState;

    }
}