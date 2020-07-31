import React,{ useState } from 'react';

import './DemoComponent.scss';

function App() {
  const [newTodo, setNewTodo]= useState(" ")
  const [todos, setTodos]= useState([
    {text:"Buy Milk", id: 1},
    {text:"Buy Cheese", id: 2},
  ])

  const handleNewTodoChange=e=>{
    e.preventDefault()
    setNewTodo(e.target.value)
  }
 const handleNewTodo=e=>{
  e.preventDefault()
  if(newTodo==='')return
   setTodos([...todos, {text:newTodo,id:Date.now()}]) 
   e.target.reset()
 }
 const removeItem=id=>{
    setTodos(todos.filter(todo=>todo.id !==id))
 }
  return (
    <div className="demo-component">
      <h1>Todos</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo..." onChange={handleNewTodoChange}/>
      </form>
      <ul className="todoList">
  {todos.map(todo=>(
  <li key={todo.id} className="todo">
    {todo.text}
  
  <a href="#" onClick={()=>removeItem(todo.id)}>X</a ></li>))}
      </ul>
    </div>
  );
}

export default App;
