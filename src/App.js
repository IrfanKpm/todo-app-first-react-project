import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos] = useState([]);
  const [todo,setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setTodos([...toDos,{id:Date.now(),value:todo,status:false}]);
          setToDo("");
          }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        toDos.map((todoe)=>{
            return(
              <div key={todoe.id} className="todo">
              <div className="left">
                <input onChange={(e)=>{
                     setTodos(toDos.filter(obj=>{
                          if(obj.id === todoe.id){
                            obj.status = e.target.checked;
                          }
                          return obj
                     }))
                     console.log(todoe)
                  }
                } type="checkbox" checked={todoe.status} />
                {todoe.status? (<p><del>{todoe.value}</del></p>) : (<p>{todoe.value}</p>)}
              </div>
              <div className="right">
                <i onClick={()=>{setTodos(toDos.filter(eachTodo=>{return eachTodo.id !== todoe.id}))}} className="fas fa-times"></i>
              </div>
            </div>
            )
        })
      }
      </div>
    </div>
  );
}

export default App;
