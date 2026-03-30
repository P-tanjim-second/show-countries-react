import React, { useState } from 'react';
import '../../App.css'

const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false)
    const handleVisit =()=>{
        handleVisitedCountry(country, visited)
        setVisited(!visited);
    }


    return (
        <div className={`boxStyle ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Money symbol: {Object.values(country.currencies.currencies)[0]?.symbol}</p>
            <p>Population: {country.population.population.toLocaleString()}</p>
            <button onClick={handleVisit}>{
                    visited? "Visited" : "Not visited"
                }</button>
        </div>
    );
};

export default Country;