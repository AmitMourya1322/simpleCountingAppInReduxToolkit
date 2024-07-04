import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./slice/counterSlice";
import './App.css'

function App() {
  const count = useSelector(state=>state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
    <div className="center">
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    
    <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
    
    </>
  )
}

export default App
