import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Details from './components/Details';

// let dummyData = [
//   {
//     id: "1",
//     title: "BMW Car",
//     dec: "Import from Germany"
//   },
//   {
//     id: "2",
//     title: "Audi Car",
//     dec: "Import from Germany"
//   },
//   {
//     id: "3",
//     title: "Rolls Royce Car",
//     dec: "Import from United Kingdom"
//   }
//   , {
//     id: "4",
//     title: "Audi Car",
//     dec: "Import from Germany"
//   },
//   {
//     id: "5",
//     title: "Rolls Royce Car",
//     dec: "Import from United Kingdom"
//   }
// ];

function App() {

  const [todos, setTodos] = useState([]);

  const getNewTodo = (newTodo) => {
    // console.log("New Todo is : ", newTodo)
    setTodos([...todos, newTodo])
  }

  const reMoveTodo = (id) => {
    setTodos((previousTodo) => {
      const filteredTodo = previousTodo.filter((todo) => todo.id != id)
      return filteredTodo
    })
  }

  return (
    <>
      <div className='container containers p-5 
       px-4 mx-auto max-w-screen-2xl xl:px-24' >
        <h1 className='text-4xl 
         text-white text-center
         font-bold'>Collect Data From a Form</h1>

        <NewTodo getNewTodo={getNewTodo} />

        <Todos todos={todos} reMoveTodo={reMoveTodo} />

        <Details />
      </div>
    </>
  );
}

export default App;
