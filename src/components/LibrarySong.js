const LibrarySong = ({ song, setCurrentSong, songs, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(audio => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div onClick={songSelectHandler} className='library-song'>
      <img src={song.cover} alt={song.name}></img>
      <div className='song-description'>
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
