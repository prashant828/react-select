import React from 'react';
import classes from './selected.css'

const selected = (props) => {
    return(
        <div className={classes.selected}>
            <span className={classes.spanOne}>{props.val}</span>
            <span className={classes.spanTwo} onClick={props.click}>x</span>
        </div>
    )
}

export default selected;