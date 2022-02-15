import React from 'react';

const Option = (props) => (
    <option className="selector-option" onClick={props.onClick}>
        {props.item}
    </option>
);

export default Option;