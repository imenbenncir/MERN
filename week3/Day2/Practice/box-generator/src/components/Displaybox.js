import React from 'react';

const Displaybox = (props) => {
    return (
        <fieldset>
        {props.color.map((color, i) => (
            <div key={i} style={{ display:"inline-block" , backgroundColor: color.color, width: '50px', height: '50px', margin: '10px'}}></div>
        ))}
        </fieldset>
    );
}

export default Displaybox;

