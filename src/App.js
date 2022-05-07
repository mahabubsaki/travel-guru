import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/pages/Blogs';
import Book from './components/pages/Book';
import Contact from './components/pages/Contact';
import Destination from './components/pages/Destination';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import News from './components/pages/News';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';
import Navbar from './components/portion/Navbar';
export const InfoContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const decrease = () => {
    if (count === 0) {
      setCount(3)
    }
    else {
      setCount(count - 1)
    }
  }
  const increase = () => {
    if (count === 3) {
      setCount(0)
    }
    else {
      setCount(count + 1)
    }
  }
  return (
    <InfoContext.Provider value={{ decrease, increase, count, setCount }}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/book/:id" element={<Book></Book>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/destination/:id" element={<Destination></Destination>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </InfoContext.Provider>
  );
}

export default App;
