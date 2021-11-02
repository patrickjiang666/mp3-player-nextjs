import React, { useEffect, useState } from "react";

export default function ControlBar(props) {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if(playing) {
            window.songTimer = setTimeout(() => {
                props.onSongChange(1);
            }, 1000);
        }
        return () => {
            clearTimeout(window.songTimer);
        }
    }, [props.curIdx, playing]);

    return <div>
        <button onClick={() => {
            props.onSongChange(-1);
        }}>Prev</button>
        <button onClick={() => {
            setPlaying(!playing)
        }}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={() => {
            props.onSongChange(1);
        }}>Next</button>
    </div>
}