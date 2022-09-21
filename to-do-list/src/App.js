import React, {useState} from 'react';
import './App.css';
import Todo from "./components/Todo"

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const todoItem = {
    text: newTodo,
    complete: false
  }

  const handleNewTodoSubmit=(e)=>{
    e.preventDefault();

    if(newTodo.length == 0){
      return;
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i)=> {
      return i != delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleCompletedItems = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx == i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e) =>{
        handleNewTodoSubmit(e);
      }}>
        <input onChange={(e)=>{
          setNewTodo(e.target.value);
        }} 
        type="text"
        value={newTodo}
      />
      <div>
        <button>
          add
        </button>
      </div>
      </form>
      {
        todos.map((todo, i)=>{

          

          return (<Todo key={i} todo={todo} handleCompletedItems={handleCompletedItems} i={i} handleTodoDelete={handleTodoDelete}
          />)
            
        })
      }
    </div>
  );
}

export default App;