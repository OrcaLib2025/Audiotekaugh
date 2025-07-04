import React from 'react';
import GetAlbum from "./GetAlbum";

interface Song {
    title: string;
    duration: string;
    genre: string;
    releaseDate: Date;
    album: string;
    description?: string;
    rating?: number;
}

interface Album {
    title: string;
    songs: Song[];
    songsCount: number;
    artist: string;
    year: number;
}

interface AlbumProps {
    albums: Album[];
}

const AllAlbums: React.FC<AlbumProps> = ({ albums }) => {
    return (
        <div className="flex flex-col">
            {
                albums && albums.map((item, index) => (
                    <GetAlbum album={item} key={index} />
                ))
            }
        </div>
    );
};

export default AllAlbums;
