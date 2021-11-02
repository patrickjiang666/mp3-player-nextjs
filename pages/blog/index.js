import React, { useEffect, useState } from "react";
import SongList from "../../components/SongList";
import ControlBar from "../../components/ControlBar";

export default function Blog(props) {
    const [songs, setSongs] = useState([]);
    const [curIdx, setCurIdx] = useState(0);

    useEffect(() => {
        fetchSongs();
    }, []);

    async function fetchSongs() {
        let response = await fetch('/api/songs');
        let data = await response.json();
        setSongs(data);
    }

    function onSongChange(dir) {
        if(dir === -1 && curIdx === 0) {
            setCurIdx(songs.length - 1);
            return;
        }
        setCurIdx((curIdx + dir) % songs.length);
    }

    return <div>
        <SongList
            songs={songs}
            curIdx={curIdx}
        />
        <div>
            <button onClick={() => {
                fetchSongs();
            }}>Refresh</button>
            <ControlBar
                curIdx={curIdx}
                onSongChange={onSongChange}
            />
        </div>
    </div>
}