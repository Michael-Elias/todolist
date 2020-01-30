import React from 'react'

const ToDos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item">
                    <span onClick={() => {deleteTodo(todo.id)}} > {todo.content}</span>
                </div>
            )
        } )
    ) : (
        <p className="center"> You have no todo's left, yay! Time to watch Demon Slayer on loop! </p>
    )
    return (
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default ToDos