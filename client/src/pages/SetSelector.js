import React from 'react';
import {Header} from '../components/header/header.js';
import {ButtonSet} from '../components/button set/btnset.js';
import "../pages/SetSelector.css"

export function SetSelector(){
    const cards = require("../data/data.json");
    const sets = cards.reduce(
        (acc, item) => {
            if(acc.map[item.setId])
                return acc;
            acc.map[item.setId] = true;
            acc.sets.push(item.setId);
            return acc;
        },
        {
            map: {},
            sets: [],
        }
    ).sets.map((item, index)=>(<ButtonSet key={index} name={item} id={index}/>));

    return (
        <div>
            <Header />
            <h2>Set Selector</h2>
            <ul className='list-set'>
                {sets}
            </ul>
        </div>
    );
    }