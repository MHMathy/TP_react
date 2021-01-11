import { useEffect, useState } from "react";

export default function PokeCardDisplay({cardChoice,display,setDisplay}){
    let [card, setCard] = useState([]);
    let [cardInfo,setCardInfo] = useState([]);
    useEffect(() => {
        let lastCall = true;
        const fetchCard = () => {
            fetch(`https://api.pokemontcg.io/v1/cards/${cardChoice}`)
                .then((response) => response.json())
                //.then((data) => console.log(data["card"]["name"]));
                .then((data) => lastCall && setCard(data["card"]));

        };
        if(cardChoice!=""){
            fetchCard();
        }

        return () => {
            lastCall = false;
        };
    }, [cardChoice]);

    useEffect(() => {
        let lastCall = true;
        const fetchCardInfo = async (type,name) => {
            fetch(`https://pokeapi.co/api/v2/${type}/${name}`)
                .then((response) => response.json())
                //.then(data => console.log(data));
                .then((data) => lastCall && setCardInfo(data));

        };
        if(card["supertype"]=="Pokémon"){
            fetchCardInfo("pokemon",card["name"].toLowerCase());
        }

        return () => {
            lastCall = false;
        };
    }, [card]);

    const handleClick = (event) => {
        console.log(event.target.value);

    }

    return (

        <div className='card_display'>
            <table className="cardInfo">
                <td>
                    <img className="card_display" alt={card["id"]} src={card["imageUrl"]} />
                </td>

                <td >
                    <tr>
                        <h2>{card["name"]}</h2>
                    </tr>
                    <tr>
                        {card["artist"]}
                    </tr>

                </td>
            </table>



        </div>
    );

}