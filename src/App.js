
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Booking } from './Components/Pages/Booking';
import { Railway } from './Components/Pages/Railway';
import { LiveLocation } from './Components/Pages/LiveLocation';
import {TrainSchedule} from './Components/Pages/TrainSchedule';

import { LoginSignup } from './Components/Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/railway' element={<Railway/>}/>
        <Route path='/Train Schedule' element={<TrainSchedule/>}/>
        <Route path='/Live Location' element={<LiveLocation/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
