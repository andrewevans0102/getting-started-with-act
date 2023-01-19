import { useState } from 'react';

interface textInput {
    text: string;
}

export const ToDo = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState<textInput[]>([]);

    const handleTodoChange = (event: any) => {
        setTodoInput(event?.target.value);
    };

    const addTodo = (toDo: string) => {
        setTodos(prevState => [...prevState, {text: toDo}]);
        // clear input field
        setTodoInput('');
    };

    return (
        <section>
            <h1>To-Do List</h1>
            <input type="text" onChange={handleTodoChange} value={todoInput} data-testid="todo-input" />
            <div>
                <button
                    onClick={() => {
                        addTodo(todoInput);
                    }}
                    data-testid="todo-button"
                >
                    Create Todo
                </button>
            </div>
            <ul data-testid="todo-list" >
                {todos &&
                    todos.map((value: textInput, index: number) => {
                        return <li key={index}>{value.text}</li>;
                    })}
            </ul>
        </section>
    );
};
