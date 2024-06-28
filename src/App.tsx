import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Code Editor</h1>
      </header>
      <Editor/>
    </div>
  );
}

export default App;
