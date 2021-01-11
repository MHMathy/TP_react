import {useEffect, useState} from "react";

export default function PokeCardSupertypeCardList({supertypeChoice, setCardChoice,display,setDisplay}) {
    let [allSupertypeCards, setAllSupertypeCards] = useState([])

    useEffect(() => {
        let lastCall = true;

        const fetchSupertypeCardList = () => {
            fetch(`https://api.pokemontcg.io/v1/cards?supertype=${supertypeChoice}`)
                .then((response) => response.json())
                //.then(data => console.log(data));
                .then((data) => lastCall && setAllSupertypeCards(data["cards"]));

        };
        fetchSupertypeCardList();
        return () => {
            lastCall = false;
        };
    }, [supertypeChoice]);

    const handleClick = (event) => {
        setCardChoice(event.target.alt)
        setDisplay("DisplayCard");
    }

    useEffect(() => {
        console.log(display)
        console.log("i try");

        if(display!="SupertypeCardList"){
            console.log("i succeed");
            return(
                <></>
            )

        }
    },[display])


    return (

        <div class='supertype_card_list'>
            {allSupertypeCards.map(card => (
                <img className="card_display "alt={card["id"]} src={card["imageUrl"]} onClick={handleClick}/>
            ))}
        </div>
    );

}
