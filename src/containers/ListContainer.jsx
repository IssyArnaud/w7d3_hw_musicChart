import React, { useState, useEffect }from "react"
import Top20List from "../components/Top20List"

const ListContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(
        () => {getSongs()}, []
    )

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then((data) => {setSongs(data.feed.entry) 
            console.log(data.feed.entry)})
        // .then(songs = setSongs(songs))
    }

    return (
        <>
        <h2>List Container</h2>
        {songs ? <Top20List songs={songs}/> : null}
        </>
    )
}
export default ListContainer