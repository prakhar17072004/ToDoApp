import React,{useState} from "react";


const TodoForm=(props)=>{
  const[inputText,setInputText] = useState('');

  
    return(
     
       
       <div className="">
       <div className="relative ml- ">
       <input
      type="text"
      value={inputText}
      onChange={(e)=>setInputText(e.target.value)}
      className="outline-none p-6 rounded-full  bg-pink-200 w-[400px]"
       placeholder="write your task"/>

       <button  className="outline-hidden rounded-full p-[24px] button absolute right-2 bottom-0  bg-gray-700"  
        onClick={(e)=>{
          e.preventDefault();
          if (inputText.trim() !== "") {
            props.addlist(
              {text: inputText,
               isChecked:false,
              })
              setInputText("")
          }
          
          
        }}
       
       >Add</button>
       </div>
      
      
      </div>
      
     
      
      
      
      
    )
}

export default TodoForm;