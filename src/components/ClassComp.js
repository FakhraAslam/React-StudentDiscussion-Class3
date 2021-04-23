import React from 'react'

class ClassComp extends React.Component{
   
render(){
    const participants=this.props.numberOfParticipants;
  
return(
<div>
    {  this.props.myFunction()}
<p>particpants of this self arranged class are: {participants} </p>
</div>
)
};
}

export default ClassComp;