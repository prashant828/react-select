import React from 'react';
import classes from './selected.css'

const option = (props) => {
    return(
        <div onClick={props.click} className={classes.option}>{props.name}</div>
    )
}

export default option;