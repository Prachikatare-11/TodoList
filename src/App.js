import "./App.css"
import TodoList from "./Component/TodoList";
import Todoinput from "./Component/Todoinput";
import React, { useState } from "react";
function App(){
  const[ListTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...ListTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...ListTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return(
 <div className="main-container">
  <div className="center-container">
  <Todoinput addList={addList} />
 <h1 className="app-heading">Todo</h1>
 <hr/>
 {ListTodo.map((listItem,i)=>{
  return(
<TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
  )
 })}
  </div>
 </div>
  )
}
export default App;