import React from 'react'

import { RiDeleteBin6Fill } from "react-icons/ri";

const Todo = ({ id, title, dec, removedTodo }) => {
    const handleId = (id) => {
        removedTodo(id)
    }
    return (
        <div >
            <div className="card bg-base-100 w-full md:w-96 lg:md:w-96 shadow-xl mb-2">
                <div className="card-body flex-row flex justify-between">
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p>{dec}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"
                            onClick={() => { handleId(id) }}><RiDeleteBin6Fill
                                className='font-bold text-lg' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo