import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    //Deleting in this way will not work in React
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  // {
  //   sno: 1,
  //   title: "Go to the market", 
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 2,
  //   title: "Go to the mall", 
  //   desc: "You need to go to the mall to get this job done2"
  // },
  // {
  //   sno: 3,
  //   title: "Go to the school", 
  //   desc: "You need to go to the school to get this job done3"
  // }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="My ToDos List" searchBar={true} />
        <Routes>
          {/* ✅ Corrected: Removed `render` and used `element` */}
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />

          {/* ✅ Corrected: Used `element={<About />}` */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
