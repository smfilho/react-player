import { useState } from 'react';
// Styles
import './styles/app.scss';
// Components
import Player from './components/Player';
import Song from './components/Song';
// Data
import data from './data';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[7]);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
