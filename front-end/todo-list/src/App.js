import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return (

      <div className="App">
        <Header />
        <Router>
        <Routes>
        <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
 
  );
};

export default App;


