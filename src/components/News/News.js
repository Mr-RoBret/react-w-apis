import React, { useState, useEffect } from 'react';
import NewSingle from './NewSingle';

const News = props => {

    const [newsSource, setNewsSource] = useState(props.apiURL);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7',
            {    
                method: "GET",
            })
            .then((response) => response.json()) 
            .then((data) => setNewsSource(data.articles))
            .catch(error => console.log(error));
    }, [newsSource]);

    const renderItems = () => {
        return newsSource.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    };

    return (
        <div className="row">
            {renderItems}
        </div>
    );
    
}

export default News;
