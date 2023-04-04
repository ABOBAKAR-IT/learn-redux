import './App.css';
import Counter from './Componenet/Counter';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
     <button onClick={(e)=>{dispatch({type:"ADD"})}}>Increment</button>
   <Counter type={0} /> 
     <button onClick={(e)=>{dispatch({type:"SUBTRACT"})}}>Decrement</button>
     <hr/>
     <button onClick={(e)=>{dispatch({type:"ADD1"})}}>Increment</button>
   <Counter type={1}/> 
     <button onClick={(e)=>{dispatch({type:"SUBTRACT1"})}}>Decrement</button>
     <hr/>
     <button onClick={(e)=>{dispatch({type:"ADD2"})}}>Increment</button>
   <Counter type={2}/> 
     <button onClick={(e)=>{dispatch({type:"SUBTRACT2"})}}>Decrement</button>
     <hr/>
    </div>
  );
}

export default App;
