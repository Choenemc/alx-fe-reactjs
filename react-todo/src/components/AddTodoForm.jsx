import React , { useState } from 'react';

const AddTodoForm = ({ AddTodoForm }) => {
    const [inputValue, setinputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefualt();
        if (!inputValue.trim()) return;
        onTodo(inpuValue);
        setinputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo..."
                value={inputValue}
                onChange={(event) => setinputValue(event.target.value)}
                />
                <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;