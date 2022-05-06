import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/pages/Blogs';
import Book from './components/pages/Book';
import Contact from './components/pages/Contact';
import Destination from './components/pages/Destination';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Navbar from './components/portion/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/book" element={<Book></Book>}></Route>
      </Routes>
      <Routes>
        <Route path="/destination" element={<Destination></Destination>}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
