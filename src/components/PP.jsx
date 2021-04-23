import React from 'react';
export class PP extends React.Component {
    render() {
        const nname=this.props.name;
        const participants =[20,21,22,23,12,10];
        const filteredPartcipants=participants.filter(stu=>stu>18);
        return (
            <div>
              
                   {
                     filteredPartcipants.map((ages,ind)=><p key={ind}>{ind}---{ages}</p>)
                     
                   }
                  <ul>
                     {nname.map(user=> <li>{user}</li>)}
                  </ul>
          
            </div>
        )
    };
}
