import React, { useState } from "react";
import TodoForm from "./Component/TodoForm";
import Todolist from "./Component/Todolist";
import EditForm from "./Component/EditForm";
import { FcTodoList } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([]);

  let addlist = (inputText) => {
    if(inputText.text!==""){
      setTodoList([...todolist, inputText]);
      
    }
   else{
    toast.error("Enter An items")
   }
    
      
    
  
      
    
  };

  const checkHandler=(index)=>{
    const updatelist= todolist.map((todo,i)=>{
      if(i===index){
        return{...todo,isChecked:!todo.isChecked}
      }
      return todo;

    })
    setTodoList(updatelist)
      
    
  }

const deleteListItem =(index)=>{
  let newListTodo = [...todolist];
  newListTodo.splice(index,1)
  setTodoList([...newListTodo])
}

const editbtn = (index) => {
  const updatedList = todolist.map((todo, i) => {
    if(i === index) {
      return { ...todo, isEditing: !todo.isEditing };
    }
    return todo;
  });
  setTodoList(updatedList);
};

const editTask = (index, item) => {
  const updatedList = todolist.map((todo, i) => {
    if(i === index) {
      return { ...todo, text: item, isEditing: !todo.isEditing };
    }
    return todo;
  });
  setTodoList(updatedList);
};
  return (
    <div className="bg  w-[100vw]  p-[200px] min-h-[100vh] h-auto">
      <div className=" rounded-2xl p-20 bg-white items-center justify-center border-[5px] w-[600px] h-auto  border-black mx-auto">
        <div className=" flex ml-4 text-2xl  mb-4">
          To-Do-Lists
          <FcTodoList  className="ml-4 mx-auto text-2xl "/>
          </div>
        <TodoForm addlist={addlist} />
        <h1>TODO</h1>
        <hr />
        {todolist.map((listItem, index) => 
          listItem.isEditing ?
          ( <EditForm key={index} editTask={editTask} item={listItem} index={index}/>):
           (
            <Todolist
              key={index} // Use a unique key
              index={index}
              item={listItem}
              deleteItem={deleteListItem}
              checkHandler={checkHandler}
              editbtn={editbtn}
            />
          )
      )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
