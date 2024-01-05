/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import {TodoProvider} from "./context/index"
import {TodoForm,TodoItem} from "./components/index";


function App() {
  
  const [todos,setTodos]=useState([]);
  // todo here will be added form the form 
  const addTodo=(todo)=>{

      setTodos((prev)=>[{
        id:Date.now(),...todo
      },...prev]) // to prevent the prevois states of todos
  }
  const deleteTodo=(id)=>{
     setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
  }

  const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map(
        (prevTodo)=>(prevTodo.id===id ? todo:prevTodo)
      ))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>
         prev.map(
          (prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo
    ))
      
  }
  const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
  // use to fecth data from local storage but in string format
  // to get the todos
  // not working in browser
  useEffect(()=>{
    const toodos= localStorage.getItem("todos")
    
    
    if(todos && todos.length>0) setTodos(todos)
  },[])
  // to set the function
  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify)
  }
  ,[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo
    ,deleteTodo,toggleComplete}}>
      <div className="bg-[#172856] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className="w-full">

                           <TodoItem todo={todo}/>
                             

                          </div>
                        )
                        )}
                    </div>
                </div>
            </div>
     
    </TodoProvider>
  )
}

export default App
