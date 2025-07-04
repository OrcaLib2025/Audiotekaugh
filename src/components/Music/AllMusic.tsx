import React, {useEffect, useState} from 'react';
import { Music as MusicModel } from "../../models/music";
import Music from './Music';

export const AllMusic = () => {
    const [albums, setAlbums] = useState<MusicModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchAlbumsByAuthor = async () => {
            try {
                const response = await fetch(`http://localhost:5000/musics/allMusic`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch albums by author");
                }

                const data = await response.json();

                setAlbums(data);
                setLoading(false);
            } catch (err) {
                setError("Error loading songs");
                setLoading(false);
            }
        };

        fetchAlbumsByAuthor();
    }, []);

    return (
        <div className="flex flex-col">
            {albums && albums.map((item, index) => {
                const musicWithAuthors = item.songs.map(song => ({
                    ...song,
                    artist: item.title
                }));

                return (
                    <Music key={index} music={musicWithAuthors} />
                );
            })}
        </div>
    );
};
