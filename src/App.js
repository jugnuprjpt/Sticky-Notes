
import './App.css';
import LandingPage from './Component/LandingPage/LandingPage';
import Header from './Component/Header/Header';

import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Component/SideBar/Home/Home';
import Trash from './Component/SideBar/Trash/Trash';
import Archive from './Component/SideBar/Archive/Archive';


function App() {
  return (
    <>
      {/* <LandingPage/> */}
     
      <Routes>  
            <Route path="/" element={<LandingPage />} ></Route>
            <Route path='/header' element={<Header /> } ></Route>
            <Route path='/home' element={<Home /> } ></Route>
            <Route path='/archive' element={<Archive />}></Route>  
            <Route path='/trash' element={<Trash />}></Route>
      </Routes>
    </>
  );
}

export default App;
