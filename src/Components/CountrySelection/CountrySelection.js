import React from 'react'
import "./CountrySelection.scss";
import CountryDropdown from 'country-dropdown-with-flags-for-react'; 
const CountrySelection = () => {
  return (
    <div className='country-selection'>
    <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['In', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
</div>
  )
}

export default CountrySelection