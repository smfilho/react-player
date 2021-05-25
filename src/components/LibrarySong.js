import { playAudio } from '../util';

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    // Check if the song is playing
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className='song-description'>
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
