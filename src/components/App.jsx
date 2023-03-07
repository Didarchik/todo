import React from "react";

function App() {
  const [inputVal, setInput] = React.useState('');
  const [todo, setTodo] = React.useState([]);
  
  const handleList = (e) => {
    setInput(e.target.value)
  }

  const handleButton = () => {
    setTodo( (items) => {
      return [...items, inputVal];
    })
    setInput('');
  }


  const itemClick = (index) => {
    const newAr = [...todo];
    newAr.splice(index, 1);
    setTodo(newAr);

  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
          name="todo_list"
          onChange={handleList}
          value={inputVal}
        />
        <button onClick={handleButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.map((item, id) => 
            <li 
            key={id} 
            onClick={() => itemClick(id)}
            style={{textDecoration: "none"}}
            >
          {item}
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
