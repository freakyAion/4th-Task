import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Card } from "../card/card.js"

import "./set.css"

export function Set(){
    const param = useParams();
    console.log(param.id);
    const location = useLocation();
    const { set } = location.state;
    var [step, setStep] = React.useState(0);

    const cards = require('../../data/data.json').filter((item) => (item.setId === set));

    const StepMinus = () =>
    {
        if (step - 1 >= 0) setStep(step--);
    }

    const StepPlus = () =>
    {
        if (step + 1 <= cards.length) setStep(step++);
    }
    
    const backArrow = '<';
    const frontArrow = '>';

    return(
        <div>
            <h2>{set}</h2>
            <Card front={cards[step].front} back={cards[step].back} />
            <div className="controls">
                <button onClick={StepMinus}>{backArrow}</button>
                <p>{step + 1} / {cards.length}</p>
                <button onClick={StepPlus}>{frontArrow}</button>
            </div>
        </div>
    )
}