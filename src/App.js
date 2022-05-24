import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog';
import Login from './Pages/Login/Login';
import Tools from './Pages/Home/Tools';
import ToolDetail from './Pages/Home/ToolDetail';
import Signup from './Pages/Login/Signup';
import Items from './Pages/Home/ItemCollection/Items';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/tool/:toolId' element={<ToolDetail></ToolDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;