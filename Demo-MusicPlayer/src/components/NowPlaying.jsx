

export default function NowPlaying({currentSong}) {
    return (
        <>
            {currentSong && (
                <div className="now-playing">
                    <img src={currentSong.image} alt={currentSong.name} />
                    <div className="song-info">
                        <h2>{currentSong.name}</h2>
                        <p>{currentSong.artist}</p>
                        <audio controls>
                            <source src={currentSong.audio} type="audio/mpeg" />
                        </audio>
                        <button onClick={() => alert(`Playing ${currentSong.name} by ${currentSong.artist}`)}>
                            Play
                        </button>
                        <button onClick={() => alert(`Paused ${currentSong.name} by ${currentSong.artist}`)}>
                            Pause
                        </button>
                        <button onClick={() => alert(`Skipping to next song`)}>
                            Next
                        </button>
                        <button onClick={() => alert(`Going back to previous song`)}>
                            Previous
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}