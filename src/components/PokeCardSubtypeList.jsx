import { useEffect, useState } from "react";

export default function PokemonDisplaySubtypeList({setSubtype}){
    let [allSubtypes, setAllSubtypes] = useState([])

    useEffect(() => {
        let lastCalled = true;

        const fetchSubtypes = () => {
            fetch("https://api.pokemontcg.io/v1/subtypes")
                .then((response) => response.json())
                .then((data) => setAllSubtypes(data["subtypes"]));

        };
        fetchSubtypes();
        return () => {
            lastCalled = false;
        };
    }, []);
        /*
        fetch("https://api.pokemontcg.io/v1/subtypes")
                .then((response) => response.json())
                .then((results) => setAllSubtypes[results["subtypes"]])
                .then(() => console.log(allSubtypes))

        };
        fetchSubtypes();


        return () => {
            lastCalled = false;
        };
    },)
    */
    console.log(allSubtypes)
    return (
        <div class='subtypes_list'>
            <p>Subtype</p>
            <select value="choose">
                {allSubtypes.map(name => (
                    <option key={`pokemon-type-${name}`} value={name}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );

}