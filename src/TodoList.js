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
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16" style={{color:'red'}}>
              <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
            </svg>
            </button>
          </li>
        </ul>
      </div>
   
  );
};

export default TodoList;
