import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Heading from './Components/Heading';
import History from './Components/History';
import Summary from './Components/Summary';
import Nav  from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Heading/>
      <Balance/>
      <Summary/>
      <History/>
      <AddTransaction/>
    </div>
  );
}

export default App;
