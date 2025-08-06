import { useState } from 'react'


function App(){

  const [text , setText] = useState('');
  const [todo, setTodo]= useState([])

  const handleAdd =()=> {
    setTodo([...todo, text])
    setText('')
  }

  const handleDelete = (index) => {
    setTodo(todo.filter((element, ind) => ind !== index))
   
  }

  return (
   <>

    <h1>Todo App</h1>
    <input type='text'  value={text} onChange={(e) => setText(e.target.value)}></input>
    <button onClick={handleAdd}>Add</button>

    <ul>
      {todo.map((item,index)=> <li key={index}>  {item} <button onClick={()=>handleDelete(index)}>delete</button> </li> )}
    </ul>

  
   </>
  
   
  )
}

export default App
