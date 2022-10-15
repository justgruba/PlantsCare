import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Link className="App-link" to="/login">LogIn</Link>
          <Link className="App-link" to="/signup">SignUp</Link>
      </header>
      <main>
        <p>Welcome!</p>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
