import { useState, useEffect } from "react";

function App() {
  const [toDo,setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange =(event)=>{
    setToDo(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos((prevArray)=>[toDo, ...prevArray]);
    // setToDos((prevArray)=>{
    //   let retArray = prevArray;
    //   retArray.push(toDo);
    //   return retArray;
    // })
  }
  // useEffect(() => console.log(toDos),[toDos]);
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={toDo} 
          placeholder="Write your to do..." 
          onChange={onChange}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=>{ 
          return(
          <li key={index}>
            {item}
          </li>
          )})
        }
      </ul>
    </div>
    
  );
}

export default App;