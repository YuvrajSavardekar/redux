import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30"},
        { title: "All Star", duration: "3:15"},
        { title: "I Want it That Way", duration: "3:15"},
        { title: "Smooth Criminal", duration: "7:30"}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})