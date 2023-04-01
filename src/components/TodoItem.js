import React from 'react'

function TodoItem({ todo, onComplete, onDeleteItem }) {

    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgroundColor: '#CCF7E3'
        }
    }

    return (
        <div className="card w-75" style={getStyle()}>
            <div className="card-body">
                
            <input type='checkbox' checked={todo.completed} onChange={() => onComplete(todo.id)} />
            <h5 className="card-title">{todo.task}</h5>
            
            <button type="button" className="btn btn-secondary" onClick={() => onDeleteItem(todo.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default TodoItem;