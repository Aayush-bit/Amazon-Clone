import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        {/* here comes the header/navbar */}
        <Header />

        
        {/* routes for this application */}
        <Routes />
      </Router>
    </div>
  );
}

export default App;
