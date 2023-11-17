import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1 ) => {
        setCounter( (current) =>  current + value ); //current es el valor actual del estado
    }

    const decrement = (value = 1) => {
        if( counter === 0 ) return;     // Evitar que el contador pase a negativo
        setCounter( (current) =>  current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }
    
    return { 
        counter,
        increment,
        decrement,
        reset
    }

}