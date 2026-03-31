import React, { use, useState } from 'react';
import Country from '../Country/Country';
import styles from './Countries.module.css'
import { ScanSearch } from 'lucide-react';

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
            <h1 style={{ textAlign: "center" }} className='text-5xl mb-3  font-["Oswald"]'>Countries: {countries.length}</h1>
            <h2 className='text-xl'>Visited Countries: {visitedCountry.length === 0 ? "NO COUNTRY VISITED" : visitedCountry.map((ctry, i) => (i == 0? " " : ", ") + ctry.name )}</h2>
            <br />
            <h2 className='text-xl'>Total Visit: {visitedCountry.length}</h2>
            <br />
            <div className={`${styles.visitedFlags} flex gap-1 flex-wrap`}>
                {visitedCountry.map((ctry) => <img src={ctry.flag}/>)}
            </div>
            <br />
            <br />
            <div className='flex content-center items-center'>
                <input type="text" placeholder='Search country' id='searchCountry' onChange={handleSearch} style={{
                padding: 10,
                borderRadius: 20,
                border: "1px solid rgba(202, 202, 202, 0.464)",
                borderBottom: "2px solid  rgba(202, 202, 202, 0.464)",
                borderRight: "none"
            }}/><ScanSearch />
            </div>
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