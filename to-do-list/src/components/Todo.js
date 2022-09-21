const Todo = (props) => {
    const todoStyle = ["bold", "italic"];
    if (props.todo.complete) {
        todoStyle.push("line-through")
    }
    return (
        <div>
            <input onChange={(e) => {
                props.handleCompletedItems(props.i);
            }}
            checked={props.todo.complete} 
            type= "checkbox"
            />
            <span className={todoStyle.join(" ")}>
            {props.todo.text}</span>
            <button 
                onClick={(e) => {
                props.handleTodoDelete(props.i)
                }} 
                style={{marginLeft: "10px"}}>
            Delete
            </button>
        </div>
    )
}

export default Todo;