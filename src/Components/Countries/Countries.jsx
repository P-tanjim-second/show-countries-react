import React, { use, useState } from 'react';
import Country from '../Country/Country';
import styles from './Countries.module.css'

const Countries = ({ countryPromise }) => {
    const countries = use(countryPromise).countries
    const [visitedCountry, setVisitedCountry] = useState([])
    const [searchCountryText, setSearchCountryText] = useState("");
    const [searchCountriesName, setSearchCountriesName] = useState([]);

    const handleVisitedCountry = (country, visited) => {
        if (!visited) {
            if (visitedCountry.includes(country.name.common)) {
                return
            }
            setVisitedCountry([...visitedCountry, {name: country.name.common, flag: country.flags.flags.png}])
        }
        else{
            setVisitedCountry([...visitedCountry.filter(ctry => ctry.name !== country.name.common)])
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchCountryText(value);
        setSearchCountriesName(countries.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Countries: {countries.length}</h1>
            <h2>Visited Countries: {visitedCountry.length === 0 ? "NO COUNTRY VISITED" : visitedCountry.map((ctry, i) => (i == 0? " " : ", ") + ctry.name )}</h2>
            <h2>Total Visit: {visitedCountry.length}</h2>
            <div className={styles.visitedFlags}>
                {visitedCountry.map((ctry) => <img src={ctry.flag}/>)}
            </div>
            <br />
            <br />
            <input type="text" placeholder='Search country' id='searchCountry' onChange={handleSearch} style={{
                padding: 10,
                borderRadius: 20
            }}/>
            <br />
            <br />
            <div className={styles.countries}>
                {
                   searchCountryText.trim().length === 0 ? (countries.map(country => {
                        return <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>
                    })): <>{searchCountriesName.map(country => {
                        return <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>
                    })}</>
                }
            </div>
        </div>
    );
};

export default Countries;