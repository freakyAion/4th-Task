import React from 'react';
import {Outlet} from 'react-router-dom'
import {Header} from '../components/header/header.js';

export function SetCreator(){
    return <div>
        <Header />
        <h2>Set Creator</h2>
        <Outlet/>
    </div>;
}