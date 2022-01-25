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
        return this.state.options.map((item) => (
                <Option key={item.source.id} item={item.source} />
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