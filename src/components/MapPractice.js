// this is class component 

import React from 'react';

class MapPractice extends React.Component{
render(){
    let i=0;
    const mycities=["Islambad","Karachi","quetta","lahore"];
    return(
<ul>
{mycities.map((c,ind)=><li >{ind}{c}</li> )}

</ul>
    );
}
}
export default MapPractice;