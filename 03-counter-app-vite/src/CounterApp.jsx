import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleClick }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button aria-label="btn-reset" onClick={ handleReset }>
                Reset
            </button>
        </>
        
    )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;