import React from 'react';
import './App.css';
import {useState} from 'react';


function App() {

  const [toDos,setToDos] = useState([]);
  const [toDo,setTodo] = useState([''])
  const [delToDo,setDelToDo] = useState([])
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    
    <div className="app">
    
<div>
    <div class="w3-panel w3-card-4 w3-grey">
      <div className="mainHeading">
        <h1>ToDo List</h1>
        
      </div>
      <div className="subHeading">
        <br />
       
      </div>
      
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div><br /><br />
      </div>
      

      <div>
    <div class="w3-panel w3-card-4 w3-grey">
      <div className="todos">
        <h1>Ongoing</h1>

        { toDos.map((obj)=>{

        return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
            setToDos(toDos.filter(obj2=>{
                if(obj.id===obj2.id){
                  obj.status=e.target.checked
                }
                return obj2
            }))}} value={obj.status} class="strikethrough" type="checkbox" name="" id="" />
            <span><p>{obj.text}</p></span>
          </div>
          <div className="right">
            <i onClick={() => {
                  if (window.confirm("Are you sure ?")) {
                    setDelToDo((delToDo) => [...delToDo, obj]);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id !== obj.id) {
                        return obj2;
                      }
                      return null;
                    }))
                  }
                }} className="fas fa-times"></i>
          </div>
          
        </div>)
})}
        </div>
        <br/>
      </div>
    </div>
  </div>





 <div>
    <div class="w3-panel w3-card-4 w3-grey">
    <div className="todos">
      <h1 align="center">Completed</h1>
      {
  toDos.map((obj)=>{
    if(obj.status){
      return(<div className="todo"><h3>{obj.text}</h3><i onClick={() => {
        if (window.confirm("Are you sure ?")) {
          setDelToDo((delToDo) => [...delToDo, obj]);
          setToDos(toDos.filter(obj2 => {
            if (obj2.id !== obj.id) {
              return obj2;
            }
            return null;
          }))
        }
      }} className="fas fa-times"></i></div>)
    }
    return null
  })
}     <br/>
      </div>
      </div>
      </div>





 <div >
    <div class="w3-panel w3-card-4 w3-grey">
    <div className="todos">
      <h1 align="center">Deleted</h1>
      {
  delToDo.map((obj)=>{
    if(obj){
      return(<div className="todo"><h3>{obj.text}</h3></div>)
    }
    return null
  })
}     <br/>
      </div>
      </div>
      </div>



    </div>
   
  );
}

export default App;