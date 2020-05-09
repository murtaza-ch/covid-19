import React,{useEffect,useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries,setfetchedCountries]=useState([]);

    useEffect(()=>{

        const fetchApi=async ()=>{
            setfetchedCountries(await fetchCountries());
        }

        fetchApi();
        
    },[setfetchedCountries]);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onClick={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
