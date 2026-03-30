import React, { use, useState } from 'react';
import Country from '../Country/Country';
import styles from './Countries.module.css'

const Countries = ({ countryPromise }) => {
    const countries = use(countryPromise).countries
    const [visitedCountry, setVisitedCountry] = useState([])

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

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Countries: {countries.length}</h1>
            <h2>Visited Countries: {visitedCountry.length === 0 ? "NO COUNTRY VISITED" : visitedCountry.map((ctry, i) => (i == 0? " " : ", ") + ctry.name )}</h2>
            <h2>Total Visit: {visitedCountry.length}</h2>
            <div className={styles.visitedFlags}>
                {visitedCountry.map((ctry) => <img src={ctry.flag}/>)}
            </div>
            <div className={styles.countries}>
                {
                    countries.map(country => {
                        return <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>
                    })
                }
            </div>
        </div>
    );
};

export default Countries;