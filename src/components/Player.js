import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  isPlaying,
  setIsPlaying,
  currentSong,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
}) => {
  const playSongHandler = () => {
    // setIsPlaying(!isPlaying);
    // audioRef.current[isPlaying ? 'pause' : 'play']();
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
    // if (isPlaying) {
    //   audioRef.current.pause();
    //   setIsPlaying(!isPlaying);
    // } else {
    //   audioRef.current.play();
    //   setIsPlaying(!isPlaying);
    // }
  };

  const getTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, '0');
    return `${minutes}:${secondsWithZero}`;
    // return (
    //   Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

    // );
  };

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async direction => {
    //let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let currentIndex = songs.indexOf(currentSong);
    await setCurrentSong(
      songs[(currentIndex + direction + songs.length) % songs.length]
    );
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (isPlaying !== undefined) {
        playPromise.then(audio => {
          audioRef.current.play();
        });
      }
    }
    // let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    // if (direction === 'skip-forward') {
    //   await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    // }
    // if (direction === 'skip-back') {
    //   if ((currentIndex - 1) % songs.length === -1) {
    //     await setCurrentSong(songs[songs.length - 1]);
    //     if (isPlaying) audioRef.current.play();
    //     return;
    //   }
    //   setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    //   // if (isPlaying) audioRef.current.play();
    // }
  };
  //Adding style to song duration bar
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type='range'
          />
          <div style={trackAnim} className='animate-track'></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(-1)}
          className='skip-back'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(1)}
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
