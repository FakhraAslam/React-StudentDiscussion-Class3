import { render } from '@testing-library/react';
import React from 'react';

class FilterPractise extends React.Component{
    render(){
const mycities=["sialkot","pashawar","quetta",]
const filteredCity=mycities.filter(city=>city.length>3);

        return(
            <div>
{filteredCity.map(c=><li>{c}</li>)}
            </div>
        )
    }
}

export default FilterPractise;