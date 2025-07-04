import React, { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import { Helmet } from "react-helmet";
import Music from "../../components/Music/Music";
import { useParams } from "react-router-dom";
import { Song as MusicModel } from "../../models/music";

const Genre = () => {
    const { genre } = useParams<{ genre: string }>();
    const [newSongs, setNewSongs] = useState<MusicModel[]>([]);

    const getMusicByGenre = useCallback(async (genre: string): Promise<MusicModel[]> => {
        try {
            const response = await fetch(`http://localhost:5000/musics/musicByGenre`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ genre }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data: MusicModel[] = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching music by genre:", error);
            return [];
        }
    }, []);

    useEffect(() => {
        if (!genre) return;

        const fetchSongs = async () => {
            const songs = await getMusicByGenre(genre);
            if (songs) setNewSongs(songs);
        };

        fetchSongs();
    }, [genre, getMusicByGenre]);

    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content={`Explore Music Genres - ${genre}`} />
                <meta property="og:description"
                      content={`Dive into the ${genre} genre and discover new artists and albums.`} />
                <meta property="og:image" content="link-to-your-image" />
                <meta property="og:url" content="nothing" />
                <meta property="og:type" content="website" />

                <meta name="telegram:card" content="summary" />
                <meta name="telegram:title" content={`Explore ${genre} Genre`} />
                <meta name="telegram:description"
                      content={`Browse through the ${genre} genre and find your favorites.`} />
                <meta name="telegram:image" content="link-to-your-image" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`Explore ${genre} Genre`} />
                <meta name="twitter:description"
                      content={`Uncover the best artists in the ${genre} genre and connect with talented musicians.`} />
                <meta name="twitter:image" content="link-to-your-image" />
            </Helmet>
            <h1 className="text-[64px] text-orange-300 text-center font-bold mb-[20px]">
                {genre}
            </h1>
            <Music music={newSongs} />
        </React.Fragment>
    );
};

export default Genre;
