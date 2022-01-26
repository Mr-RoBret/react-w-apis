import React, { Component } from "react";  
import Option from './Option';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [] 
        };
    } 

    // populate options[] with news categories from NewsAPI
    componentDidMount() {
        const url = this.props.apiURL;
        //console.log(url);

        fetch(url)
            .then((response) => {
                return response.json();
            })  
            .then((data) => {
                this.setState({
                    options: data.articles
                })  
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        //map new array with source names only
        const optionsNames = this.state.options.map((item) => item.source.name);
        console.log(optionsNames);
        //pare duplicates
        const finalOptions = [...new Set(optionsNames)];
        console.log(finalOptions);

        //return list of options using Options component
        return finalOptions.map((item) => (
            <Option key={item.value} item={item} />
        ));
    }

    render() {
        return(
            <div className="Options-dropdown">
                <select className="Options-list" name="optionsList">
                    {this.renderItems()}
                </select>
            </div>
        );
    }
}

export default Selector;