import React, { useState, useEffect } from "react";  
import Option from './Option';

const Selector = props => { 
    const [options, setOptions] = useState('--');

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7',
            {    
                method: "GET",
            })
            .then((res) => res.json()) 
            .then((response) => setOptions(response.articles.source.name))
            .catch(error => console.log(error));
    }, [options]);

    // useEffect(() => {
    //     fetch(apiUrl,
    //         {    
    //             method: "GET",
    //         })
    //         .then((response) => response.json()) 
    //         .then((data) => setFilteredNews(data.articles))
    //         .catch(error => console.log(error));
    // }, [newsSource]);
        

    const handleSelection = (event) => {
        console.log('we have reached the event handler');
        let domainName = {event}
        console.log(domainName);
    };

    const renderItems = () => {
        //map new array with source names only
        // const optionsNames = this.state.options.map((item) => item.source.name);
        const optionsNames = options.map((item) => (item.source.name));
        console.log(optionsNames);

        //pare duplicates
        const finalOptions = [...new Set(optionsNames)];
        console.log(finalOptions);

        //return list of options using Options component
        return finalOptions.map((item) => (
            <Option onClick={handleSelection} key={item} item={item} />
        ));
    };

    return (
        <div className="Options-dropdown">
            <select className="Options-list" name="optionsList">
                {renderItems}
            </select>
        </div>
    );
};

export default Selector;