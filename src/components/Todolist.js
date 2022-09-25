import React, { useState } from 'react';

function Todolist() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([{ description, date }, ...todos]);
        setDescription('');
    }
    /*  const deleteTodo = () => {
         todos.filter((todo,i) => i !== index)
     } */

    return (
        <div>
            <label>Description:
                <input
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
            </label>
            <label>Date:
                <input
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />
            </label>
            <button onClick={addTodo}>
                Add
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                {/*      <td>
                                    <button onClick={deleteTodo}>
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todolist;