import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Helmet } from "react-helmet";
import AllAlbums from "../../components/Albums/AllAlbums";

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

const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch(`http://localhost:5000/album/AllAlbums`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch albums");
                }

                const data: Album[] = await response.json();
                setAlbums(data);
                setLoading(false);
            } catch (err) {
                setError("Error loading albums");
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-white text-lg">Loading albums...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content="All Albums" />
                <meta
                    property="og:description"
                    content="Explore all albums from your favorite artists. Discover new music, explore top albums, and find the latest releases."
                />
                <meta property="og:image" content="Img" />
                <meta property="og:url" content="nothing" />
                <meta property="og:type" content="website" />
            </Helmet>
            <h1 className="text-[64px] text-white text-center font-bold mb-[20px]">
                Albums
            </h1>
            <AllAlbums albums={albums} />
        </React.Fragment>
    );
};

export default Albums;
