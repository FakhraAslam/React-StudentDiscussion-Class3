import logo from './logo.svg';
import './App.css';
import MapPractice from './components/MapPractice'
import FilterPractice from './components/FilterPractise'
import Mycomponent from './components/Mycomponent'
import { PP } from './components/PP'
import { FunctionalComponent } from './components/FunctionalComponent'
import ClassComp from './components/ClassComp'
function App() {
const userName="Fakhra"
const myFunction =()=>{return "React class 3"}
  return (
    <div>
      <FunctionalComponent userName={userName}/>
      <ClassComp numberOfParticipants="12" myFunction={myFunction}/>
   
    </div>
  );
}

export default App;
