import React from "react";

export default function SongList(props) {

    return <div>
        {props.songs.map((song, idx) => <div key={idx} style={{
            color: idx === props.curIdx ? 'red' : 'black'
        }}>
            {song.name} - {song.singer}
        </div>)}
    </div>
}