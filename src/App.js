import './App.css';

import PopUp from './components/PopUp'
import React, { useEffect, useState } from 'react';
import TodoCard from './components/TodoCard';
import axios from 'axios';
import { CircularProgress } from '@mui/material';



function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get(`https://todo-rest-api-production.up.railway.app/getalltodocards`).then((res) => {
      const responseTodos = res.data.myData;
      setTodos(responseTodos);
    })
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Todo List App</h1>
        <button style={{padding:'10px 20px' , borderRadius:'10px', margin:'20px'}} onClick={() => setButtonPopup(true)}>ADD</button>
        {todos ? (
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {todos.map((todo) => {
              const { name, comment,date } = todo;
              return (
                <div >
                  <TodoCard name={name} comment={comment} date={date}/>
                </div>
              );
            })}
          </div>
        ) : (
          <CircularProgress />
        )
        }
      </main>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    </div>
  );
}

export default App;
