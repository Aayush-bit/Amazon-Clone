import './App.css';
import { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Header from './components/Header/Header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    onAuthStateChanged(auth, authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

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
