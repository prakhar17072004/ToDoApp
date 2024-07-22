import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";


 function Todolist(props) {
  return (
    <div>
        
          
          <ul>
          <li className={`flex  justify-between fit-content text-2xl font-serif ${props.item.isChecked ? "line-through": ""} `}>
          <div className='flex gap-x-4 text-2xl mt-2'>
          <input type='checkbox' className='cursor-pointer'
            checked={props.item.isChecked}
            onChange={() => props.checkHandler(props.index)}
          />
           
          <span>{props.item.text}</span>
          </div>
         <div className='flex'>
         <MdOutlineEdit className='cursor-pointer'
           onClick={()=>props.editbtn(props.index)}
         />
         <MdDelete  className='cursor-pointer'
         onClick={() => props.deleteItem(props.index)}/>
         </div>
        </li>
        </ul>
          
        
      
        
     
        
        
    </div>
  );
}

export default Todolist;