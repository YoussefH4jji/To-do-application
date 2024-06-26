import './App.css'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './MainPage'
import Form from './Form'
function App() {
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainPage/>} />
        <Route path='/todo-list' element={<Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
