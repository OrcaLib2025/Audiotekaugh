import React from "react";
import Music from "./Music";
import { Song as SongData } from "../../models/music";

interface MusicByAuthorProps {
    songs: SongData[] | null;
}

const MusicByAuthor: React.FC<MusicByAuthorProps> = ({ songs }) => {
    return <Music music={songs} />;
};

export default MusicByAuthor;
