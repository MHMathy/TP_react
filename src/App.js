import {useState } from 'react';
import './App.css';

import PokeCardSupertypeList from './components/PokeCardSupertypeList.jsx';
import PokeCardSupertypeCardList from './components/PokeCardSupertypeCardList.jsx';
import PokeCardDisplay from './components/PokeCardDisplay.jsx';

function App() {
    let [supertype,setSupertype] = useState([]);
    let [card, setCard] = useState("");
    let [elementToDisplay,setElementToDisplay] = useState("SupertypeList")



  return (
    <div className="App">
      <header className="App-header">

          <PokeCardSupertypeList display={elementToDisplay} setDisplay={setElementToDisplay} setSupertypeChoice={setSupertype}/>
          <div class="body">
              <PokeCardDisplay display={elementToDisplay} setDisplay={setElementToDisplay} cardChoice={card}/>
              <PokeCardSupertypeCardList display={elementToDisplay} setDisplay={setElementToDisplay} supertypeChoice={supertype} setCardChoice={setCard}/>

          </div>
      </header>

    </div>
  );
}

export default App;

/*
return (
    <div className="App">
      <header className="App-header">
          <PokemonList />
        <PokemonDisplay pokemonUrl={selectedPokemonUrl} />
        <PokemonTypeList setType={setSelectedType} />
        <PokemonList type={selectedType} setPokemonUrl={setSelectedPokemonUrl} />
      </header>
    </div>
  );
 */