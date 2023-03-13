import './App.css';
import Home from './Pages/Home/Home.jsx'
import Profile from './Pages/Home/Profile/Profile';
import Login from './Pages/login/Login';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/Login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
