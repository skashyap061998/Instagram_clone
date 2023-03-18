import logo from './logo.svg';
import './App.css';
import{useState,useEffect,useRef} from 'react'
import Todo from './components/Todo';

function App() {
// const [time,setTime] = useState(0)

// useEffect(()=>{
// return ()=>{
//   clearInterval(id.current)
// }
// },[])

// let id = useRef();

// const handleChange = ()=>{
//   id.current = setInterval(()=>{
//     setTime((prev)=>prev+1)
//   },1000)
// }


  return (
    <div className="App">
      {/* <h1>{time}</h1>
    <button onClick={handleChange}>Start</button>
    <button onClick={()=>{
      clearInterval(id.current)
    }}>Pause</button>
    <button onClick={()=>{
      clearInterval(id.current);
      setTime(0)
    }}>Stop</button> */}

<Todo/>

    </div>
  );
}

export default App;
