import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Dashboard/Dashboard';
import Employer from './Components/Employer/Employer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/dasboard' element={<Dashboard></Dashboard>}>

            <Route index element={<Admin></Admin>}></Route>
            <Route path='employer' element={<Employer></Employer>}></Route>

          </Route>
        </Routes>
      </Header>
    </div>
  );
}

export default App;
