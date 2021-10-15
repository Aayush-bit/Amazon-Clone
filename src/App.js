import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <div className="app">
      <Router>
        {/* here comes the header/navbar */}
        {/* ? */}

        {/* routes for this application */}
        <Routes />
      </Router>
    </div>
  );
}

export default App;
