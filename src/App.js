import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
const API_URL=`https://api.icndb.com/jokes/random`
const[joke, setJoke]= useState('')

const generateJoke=()=>{
  fetch(API_URL)
  .then(res=>res.json())
  .then(data=>setJoke(data.value.joke))
}

useEffect(()=>{
  generateJoke();
},[])


  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
  <p dangerouslySetInnerHTML={{__html: joke}}/>
      <button onClick={generateJoke}>Get new joke 🤣 </button>
    </div>
  );
}

export default App;
