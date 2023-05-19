import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AllPlayers from './components/AllPlayers';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';

function App() {
  const [players, setPlayers] = useState([])
  return (
    <div className="m-5">
      <BrowserRouter>
          <Routes>
            <Route element={<AllPlayers players={players} setPlayers={setPlayers}/>} path="/"/>
            <Route element={<AddPlayer players={players} setPlayers={setPlayers}/>} path="/addplayer"/>
            <Route element={<EditPlayer players={players} setPlayers={setPlayers}/>} path="/players/:id"/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
