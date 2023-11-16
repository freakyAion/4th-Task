import React from 'react';

export function useInput(initialValue) {
    const [value, setValue] = React.useState(initialValue);

    function handleChange(event){
        setValue(event.target.value);
    }

    return [value, handleChange];
}