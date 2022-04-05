import logo from './logo.svg';
import './App.css';
import './components/MyComponent';
import MyComponent from './components/MyComponent';
import Card from './components/Card';
import { useReducer } from 'react';
import { countReducer } from './components/Reducer';
import About from './components/Abount';
import NoteSate from './context/notes/NoteState';
import Balance from './ReduxComponent/Balance';
import BalanceEvent from './ReduxComponent/BalanceEvent';


const App = () => {

  // const StudentData = [
  //   {
  //     id:"1",
  //     name:"ABC"
  //   },
  //   {
  //     id:"2",
  //     name:"XYZ"
  //   },
  //   {
  //     id:"3",
  //     name:"PQR"
  //   }
  // ]

  // const [state, dispatch] = useReducer(countReducer,0);

  return (
    <>
      {/* <MyComponent name={"ABC"}/>
      {
        StudentData.map((studObj)=>{
            return <Card stud={studObj} key={studObj.id}/>
        })
      } */}
      {/* {state}
      <p>{state==5?'Yes':'No'}</p>
      <button onClick={()=>{dispatch({type:'ADD',value:1})}}>Add</button>
      <button onClick={()=>{dispatch({type:'REMOVE',value:1})}}>Remove</button> */}
      
      {/* Context API */}
      {/* <NoteSate>
        <About />
      </NoteSate> */}

      
      <Balance />
      <BalanceEvent />

    </>
  );
}

export default App;
