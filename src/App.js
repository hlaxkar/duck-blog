
import './App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
      </Navbar>
        <div className="content">
          <Home></Home>
        </div>
    </div>
  );
}

export default App;
