import React, { useState } from 'react';
import './App.css';
import InputFeild from './conponents/InputFeild';
import TodoList from './conponents/TodoList';
import { Todo } from './conponents/TodoModel';


const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }
  console.log(todos)

  return (
    <>
    <div className="App">
      <span className="heading">TODO APP</span>
      <InputFeild
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd} />
      <TodoList  todos={todos} setTodos={setTodos}   />
      
    </div>
    </>
  );
}

export default App;

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => never;

// function printAge(age:number) {
//   console.log(age)
// }
// printAge(4)
// // role = [6, 'Male'];


// type Person = {
//   name: string;
//   age?:number
// }

// interface Aadmi extends Person {
//   gender:String
// }
// // let person: Person = {
// //   name: 'Ram'
// // };

// // let lotsOfPeople: Person[];