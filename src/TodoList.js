import React,{useState} from "react";

const TodoList = ({ todo, id, completeTodo,removeTodo }) => {
  
  const [style, setStyle] = useState({display: 'none'});
  
 return (
    <div className="border-top">

        <ul className="list-group">
          <li
            style={{ textDecoration: todo.isCompleted && "line-through",opacity:todo.isCompleted &&'0.5' }}
            className="list-group-item d-flex  justify-content-between align-items-center input mx-1 mt-2"
            onMouseEnter={e => {
              setStyle({display: 'block'});
          }}
          onMouseLeave={e => {
              setStyle({display: 'none'})
           }}>
            <div className="w-100">
            <label class="container" style={{fontSize:'24px',color:'#4d4d4d',fontFamily:'sans-serif'}}>{todo.task}
       <input type="checkbox"checked={todo.isCompleted} onClick={()=>completeTodo(id)} class="checkmark" />
        <span class="checkmark"></span>
      </label></div>
            <button
              className="btn btn-link"
              onClick={() => removeTodo(id)}
              style={style}
              ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style={{color:'#b66a6c'}}>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
          </li>
        </ul>
      </div>
   
  );
};

export default TodoList;
