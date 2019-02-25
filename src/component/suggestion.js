import React from 'react';
import Option from './option';
import classes from './selected.css'

const suggestion = (props) => {
    let suggestions;
    let options = props.options || [];
    if(options.length<1){
        suggestions = <div>No options available</div>
    }else{
        suggestions = options.map(option => <Option key={option} name={option} click={(e)=>props.handleSelect(option)}/>)
    }
    return(
        <div className={classes.suggestionBox}>
            {suggestions}
        </div>
    )
}

export default suggestion;