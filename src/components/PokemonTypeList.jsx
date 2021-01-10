import { useEffect, useState } from "react";

export default function PokemonTypeList({ setType }) {
  let [types, setTypes] = useState([]);
  let [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    let lastCalled = true;
    const fetchTypes = () => {
      fetch("https://pokeapi.co/api/v2/type")
        .then((response) => response.json())
        .then((data) => lastCalled && setTypes(data["results"]));
    };
    fetchTypes();
    return () => {
      lastCalled = false;
    };
  }, []);

  const handleSelection = (event) => {
    setType(event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleSelection}>
      {types.map(({ name }) => (
        <option key={`pokemon-type-${name}`} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

/*
import { useEffect, useState } from "react";

export default function PokemonDisplaySubtypeList({setSubtype}){
    //let [allSubtypes, setAllSubtypes] = useState([])

    useEffect(() => {
        const fetchSubtype = () => {
            fetch("https://api.pokemontcg.io/v1/subtypes")
                .then(response => response.json)
                .then(json => console.log(json))
        }
        return null;
        },[])

return (
    <p>Subtype</p>
);

}
 */

/*
import './App.css';
import { useState } from 'react';
import PokemonDisplaySubtypeList from "./components/PokemonSubtypeList";
function App() {
    let [selectedSubtype, setSelectedSubtype] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <PokemonDisplaySubtypeList setSubtype = {setSelectedSubtype}/>
      </header>
    </div>
  );
}

export default App;
 */
