import React, { Component } from 'react';
import Selector from './Selector';



const Option = ({item}) => (
        <option value="option 1">{item.name}</option>
)

export default Option;