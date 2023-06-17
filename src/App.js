
import './App.css';
import Tarif from './components/Tarif';


const tarifs = [
  {
    name: "300",
    speed:"10"
  },{
    name: "450",
    speed:"50"
  },{
    name: "550",
    speed:"100"
  }, {
    name: "1000",
    speed:"200"
  }]

function App() {
  return (
    <div className="App">
    {tarifs.map((tarif,index )=>
    <Tarif key={index} name={tarif.name} speed= {tarif.speed} />)}
    </div>
  );
}

export default App;
