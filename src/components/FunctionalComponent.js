import React from 'react';

export const FunctionalComponent = ({userName}) => {
    const participants=["saba","asmaa","Rehan","Fakhra","Asad","Imran Khan"];
 const filteredPeople=participants.filter(stu=>stu.length<=4);
    return (<>
<ul>
  {participants.map((filteredSt,ind)=><li >{ind}---{filteredSt}</li>)}  
</ul>
<p>the developer on the screen is {userName}</p>
    </>);

}
