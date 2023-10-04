import React from "react"
import Song from "./Song"

const Top20List = ({songs}) => {
    // if (!songs.feed.entry) return

    const songItems = songs.map((song) => {
        return (
            <Song song={song}/>
        )
    })

    return (
        <>
        <h3>List itself</h3>
        <ol>
            {songItems}
        </ol>
        </>
    )
}
export default Top20List