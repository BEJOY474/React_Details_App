import { useFormik } from 'formik';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ id: "", title: "", dec: "" })
    const { id, title, dec } = todo
    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            dec: ''
        },
        validationSchema: Yup.object().shape({
            title: Yup.string()
                .min(2, 'Title is too Short!. Need minimum 2 characters')
                .max(35, 'Title is too Long! Need maximum 35 characters')
                .required('Required'),
            dec: Yup.string()
                .min(6, 'Description is too Short!. Need minimum 6 characters')
                .max(100, 'Description is too Long!. Need maximum 100 characters')
                .required('Required')
        }),

        onSubmit: (values, { resetForm }) => {
            const newTodo = {
                ...values,
                id: uuidv4()
            }
            props.getNewTodo(newTodo)
            resetForm()
        },
    });

    const titleError = formik.touched.title && formik.errors.title && (<span className='text-amber-950' > {formik.errors.title} </span>)
    const decError = formik.touched.dec && formik.errors.dec && (<span className='text-amber-950' > {formik.errors.dec} </span>)


    return (
        <div className='bg-slate-100 p-5 rounded w-full md:w-2/3 lg:w-1/2 mb-3 mt-4'>
            <form onSubmit={formik.handleSubmit} >
                <div className="space-y-12  ">
                    <div className="border-b border-gray-900/10 pb-3">
                        <h2 className="text-base text-center font-semibold leading-7 text-gray-900">

                        </h2>

                        <div className="w-full">
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="title"
                                        type="text"
                                        value={formik.values.title}
                                        autoComplete="given-name"
                                        onChange={formik.handleChange}
                                        className="block pl-2 w-full rounded-md border-0 py-1.5
                                         text-gray-900 shadow-sm ring-1 ring-inset
                                          ring-gray-300 placeholder:text-gray-400
                                           focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>

                            </div>
                            {titleError}

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block mt-3 text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="dec"
                                        type="text"
                                        value={formik.values.dec}
                                        autoComplete="email"
                                        onChange={formik.handleChange}
                                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>

                            </div>
                            {decError}

                        </div>
                    </div>
                </div>

                <div className="mt-3 flex w-full items-center justify-center ">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 w-full md:w-32 py-2 
                        text-sm font-semibold
                         text-white shadow-sm hover:bg-indigo-500
                          focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2
                            focus-visible:outline-indigo-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo