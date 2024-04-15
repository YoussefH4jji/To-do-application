import {v4 as uuidv4} from "uuid"
// import TaskList from "./TaskList"
import TaskList from "./TaskList";
import { useState, useEffect } from "react"
import Timer from "./Timer"
import Settings from './Settings';
import SettingsContext from "./SettingsContext";
import Music from "./Music";
import TaskInput from "./TaskInput";
export default function Form({input,setInput,todos,setTodos}){
    const [quoteData, setQuoteData]=useState({})
    const [quote, setQuote]=useState("")
    const [author, setAuthor]=useState("")
//  Generating Random Quotes Using Fetch API
    useEffect(()=>{
        fetch("https://api.quotable.io/random")
        .then(res=>res.json())
        .then(data=>{
            setQuoteData(data)
            setQuote(quoteData.content)
            setAuthor(quoteData.author)
        })
        
    },[])
//  Function To Store The Data in the quoteData state Whenever The Button "new quote" Is Clicked
    function handleChange(e){        
        e.preventDefault()
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuoteData(data))
         setQuote(quoteData.content)
         setAuthor(quoteData.author)
    }

    function onInputChange(e){
        setInput(e.target.value)
    }
    //  Function For Submitting the form
    function onFormSubmit(e){
        e.preventDefault()
        setTodos([...todos,{id:uuidv4(),title:input, completed:false}])
        setInput('')
    }
    // Declaring variables for the timer
    const [showSettings,setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] =useState('45')
    const [breakMinutes, setBreakMinutes]= useState('15')
    return(
        <section className="todoList-section">
           <div className="quote-container">
              <div className="quote">" {quote} "</div>
              <div className="author">{author}</div>
              <button id= "new-quote" onClick={handleChange} className="btn">New Quote</button>
           </div>

            <form onSubmit={onFormSubmit}>
                <TaskInput
                input={input}
                setInput={setInput}
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}
                />

            </form>
           
            <div className='todoos'>
            <div className="form-todo">
                <TaskList todos={todos} setTodos={setTodos} />
            </div>
            <div className="timer-music-container">
                <div className="timer">
                <SettingsContext.Provider value={
                   { 
                    showSettings,
                    setShowSettings,
                    workMinutes,
                    breakMinutes,
                    setWorkMinutes,
                    setBreakMinutes,
                }

                }>
                    {showSettings ?<Settings/> : <Timer/>}                
                </SettingsContext.Provider>
            </div>
            
            <div className="music">
                <Music/>
            </div>
            </div>
            </div>
        </section>
    )
}