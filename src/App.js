import './App.css';
import Counter from './Componenet/Counter';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
     <button onClick={(e)=>{dispatch({type:"ADD"})}}>Increment</button>
   <Counter /> 
     <button onClick={(e)=>{dispatch({type:"SUBTRACT"})}}>Decrement</button>
    </div>
  );
}

export default App;
