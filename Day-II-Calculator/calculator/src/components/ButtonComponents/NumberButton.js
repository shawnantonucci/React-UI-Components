import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className='numberBtns'>{props.number}</button>
    );
};

export default NumberButton;