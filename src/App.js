import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo",todo);

    //Deleting in this way will not work in React
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market", 
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall", 
      desc: "You need to go to the mall to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the school", 
      desc: "You need to go to the school to get this job done3"
    }
  ]);

  return (
    <>
      <Header title="My ToDos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
