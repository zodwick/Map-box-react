import React from 'react';
import './App.css';

function handle(){
    console.log("hello");
}
export default function Button(){
    return( 
        <>     
        <button className='addDistress' onClick={handle}>h</button>
        </>
    );
}

