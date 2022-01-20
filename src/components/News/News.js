import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/' + this.props.type + '&apiKey=dc575b5e0863400aacc7c1c5e409b6b7';

        fetch(url)
            .then((response) => {
                return response.json();
            })  
            .then((data) => {
                this.setState({
                    news: data.articles
                })  
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;
