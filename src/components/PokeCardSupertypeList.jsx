import { useEffect, useState } from "react";

export default function PokeCardSupertypeList({setSupertypeChoice,display, setDisplay}){
    let [allSupertypes, setAllSupertypes] = useState([])

    useEffect(() => {
        let lastCall = true;
        const fetchSupertypes = async () => {
            fetch("https://api.pokemontcg.io/v1/supertypes")
                .then((response) => response.json())
                .then((data) => lastCall && setAllSupertypes(data["supertypes"]));

        };
        fetchSupertypes();
        return () => {
            lastCall = false;
        };
    }, []);

    const handleClick = (event) => {
        setSupertypeChoice(event.target.value);
        setDisplay("SupertypeCardList");
        //console.log(display);
    }

    return (
        <div class="navbar">
            {allSupertypes.map(name => (
                <button className={`supertype_button_${name}`} onClick={handleClick} value={name}>{name}</button>
            ))}
        </div>
    );

}