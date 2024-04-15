export default function TaskInput({input, onInputChange}){
    
    return(
        <div className="task-input-container">
                <input type="text" 
                placeholder="Enter A Task..." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
                /> 
                <button className="btn add-task-btn">ADD</button>
        </div>
    )
}