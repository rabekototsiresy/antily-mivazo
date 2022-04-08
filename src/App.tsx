import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector }  from 'react-redux';

import Home from './share/pages/home';
import Profile from './share/pages/profile';
import Login from './share/pages/auth/login/index';
import Register from './share/pages/auth/register/index';
import Playlist from './share/pages/playlist';
import Sidebar from './share/components/sidebar';
import { StateI } from './common/interfaces/redux/StateI';
import { Private } from './routes/private';
import { Restrict } from './routes/restrict';

function App() {
  const navigate = useNavigate();

  const showModal = useSelector((state: StateI)=>state.global.showModal);
  console.log(showModal)
  const toggleSidebar = (path:string)=>{
     navigate('playlist');
 
  }
  return (
    <div className="app">
      {showModal && <Sidebar toggleSidebar={toggleSidebar} />}
     <Routes>
       <Route path='/' element={<Home  toggleSidebar={toggleSidebar} />}></Route>
       
       {/* RESTRICT ROUTE */}
       <Route element={<Restrict />}>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
       </Route>
       {/* END RESTRICT ROUTE */}

       {/* PRIVATE ROUTE*/}
       <Route element={<Private/>}>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/playlist' element={<Playlist />}></Route>
       </Route>
       {/*END PRIVATE ROUTE*/}
       <Route path='*' element={<h1>TSY MISY ILAY PAGE</h1>} />
     </Routes>
     
    </div>
  );
}

export default App;
