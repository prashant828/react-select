import React from 'react';
import Selected from './selected'
import classes from './selected.css'

const inputDiv = (props) => {
    let values = props.values;
    let selections = values.map(value => <Selected key={value} val={value} click={(e) => props.handleDelete(value)} />)
    return (
        <div onClick={props.click} className={classes.inputDiv}>
            {selections}
            <input
                type='text'
                ref={props.inputFocus}
                onChange={props.change}
                className={classes.input}
                value={props.inputValue}></input>
        </div>
    )
}

export default inputDiv;