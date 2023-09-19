import { useState,useEffect } from 'react'
import Card from './card';
import Header from './header';
import './App.css'

function App() {
 const [pokemons, setPokemons] = useState(null);

 useEffect(()=>{
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json())
  .then(res =>{
    setPokemons(res.results)
  })

 },[])


const [score,setScore] = useState(0)

 function shuffleArray(array) {
  let len = array.length,
      currentIndex;
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
      let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
      var temp = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temp;
  }
  setPokemons(array)
}

const [clicked,setClicked] = useState([])

 function removeP(event){
  setClicked(()=> [...clicked,event.target.id])
if(!clicked.includes(event.target.id)){
  setScore(()=>score+1)
}
else if(clicked.includes(event.target.id)){
  setScore(()=> 0)
  setClicked(()=>[])
}
 
setPokemons(() => pokemons.filter(pokemon =>  pokemon.name !== event.target.id))
 
setInterval(()=>{shuffleArray(pokemons)},100)
 }
  return (
    <>
      <div>
      <h2>score:{score}</h2>
       <ul>
        {!pokemons? <p>loading</p>:
        pokemons.map(pokemon=> 
          <li key={pokemon.name}
       
          >
            <Header>{pokemon.name}</Header>
         <Card
         name={pokemon.name}
         event={removeP}
          url ={pokemon.url}
          onClick={removeP}
          />
          </li>
          )
        }
       </ul>
      
        
      </div>
  
    </>
  )
}

export default App
