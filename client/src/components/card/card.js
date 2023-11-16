import React from "react"
import "./card.css";

export function Card({front, back}) {
    const [checkedCard, setCheckedState] = React.useState(false);

    const handleClick = () =>{
        setCheckedState(!checkedCard);
        console.log("Click handled")
    }

    const className = `card ${checkedCard ? 'card-checked': ''}`;

    return(
        <div className={className} onClick={handleClick} data-back={back}>
            {front}
        </div>
    );
}

