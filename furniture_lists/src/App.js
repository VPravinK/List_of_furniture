
import './App.css';
import Furniture from './components/Furniture_list';
function App() {
  const items =[
    {
        name:"Bed",
        date: new Date(2020,12,20),
        amount:8500
    },
    {
        name:"Fridge",
        date: new Date(2020,12,22),
        amount:10000
    },
    {
      name:"LED Tv",
      date: new Date(2020,12,26),
      amount:25000
  }
]


  return (
    <div className="App">
      <label>List Of Furniture</label>
      <Furniture name={items[0].name} date={items[0].date} amount={items[0].amount}></Furniture>
      <Furniture name={items[1].name} date={items[1].date} amount={items[1].amount}></Furniture>
      <Furniture name={items[2].name} date={items[2].date} amount={items[2].amount}></Furniture>
    </div>
  );
}

export default App;
