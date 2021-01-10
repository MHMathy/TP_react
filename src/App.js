import { useState } from 'react';
import './App.css';
//import PokemonDisplay from './components/PokemonDisplay';
//import PokemonList from './components/PokemonList';
//import PokemonTypeList from './components/PokemonTypeList';
import PokeCardSubtypeList from './components/PokeCardSubtypeList.jsx';
function App() {
    let [subtypeList,setSubTypeList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
          <PokeCardSubtypeList />
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