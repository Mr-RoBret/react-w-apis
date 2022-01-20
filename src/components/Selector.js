import React, { Component } from "react";  

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Apple News", "Tesla News", "Business", "TechCrunch", "Wall Street Journal"] 
        };
    } 

    render() {
        return(
            <div>
                <select name="list" id="list">
                    <option value={this.state.options[0]}>Option1</option>
                    <option value={this.state.options[1]}>Option2</option>
                    <option value={this.state.options[2]}>Option3</option>
                    <option value={this.state.options[2]}>Option4</option>
                </select>
            </div>
        );
    }
}

export default Selector;