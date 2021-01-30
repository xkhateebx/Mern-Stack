import Prop from './components/Prop'
import './App.css';

function App() {
  return (
    
    <div className="App">

      <Prop firstName ="Mahmoud" lastName="Khateeb" age= {22} hairColor = "Black" ></Prop>
      <Prop firstName ="Manar" lastName="Hasan" age= {24} hairColor = "Brown" ></Prop>
      <Prop firstName ="Bahaa" lastName="Hashim" age= {23} hairColor = "Pink" ></Prop>

    </div>
  );
}

export default App;
