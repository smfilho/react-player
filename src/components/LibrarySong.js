const LibrarySong = ({ song }) => {
  return (
    <div className='library-song'>
      <img src={song.cover} alt='current song'></img>
      <div className='song-description'>
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
