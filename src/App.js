import { useState } from 'react';
// Styles
import './styles/app.scss';
// Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// Data
import data from './data';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[7]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
