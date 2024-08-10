import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    return (
        <div className='md:flex flex-wrap md:space-x-2 justify-center ' >
            {
                props.todos.map((todo) => <Todo
                    key={todo.id} {...todo} removedTodo={props.reMoveTodo} />)
            }
        </div>
    )
}

export default Todos