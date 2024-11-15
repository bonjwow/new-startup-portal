import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl font-bold text-white">Hello 👋</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
