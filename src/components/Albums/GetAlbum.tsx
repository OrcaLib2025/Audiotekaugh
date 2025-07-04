import React from 'react';

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
    album: Album;
}

const GetAlbum: React.FC<AlbumProps> = ({ album }) => {
    if (!album) {
        return <p className="text-white text-center">No album data available.</p>;
    }

    return (
        <div className="flex flex-row justify-between w-full h-auto mb-6 border border-gray-300 rounded-lg overflow-hidden">
            <img
                src={`${process.env.PUBLIC_URL}/img/album.png`}
                alt={album.title}
                className="max-w-[312px] w-full md:w-[256px] h-auto object-cover bg-violet-500"
            />
            <div className="w-full p-6 bg-violet-200 text-black">
                <h1 className="text-[32px] md:text-[48px] font-bold text-lightblack mb-4">
                    {album.title}
                </h1>
                <div
                    className="text-[24px] md:text-[32px] text-violet-800 underline"
                >
                    {album.artist}
                </div>
                <p className="text-[18px] md:text-[20px] mt-4">
                    <strong>Songs in album:</strong> {album.songsCount}
                </p>
                <p className="text-[18px] md:text-[20px] mt-2">
                    <strong>Year:</strong> {album.year}
                </p>
                <div className="mt-4">
                    <h2 className="text-[24px] font-bold mb-2">Songs:</h2>
                    <ul className="list-disc list-inside">
                        {album.songs.map((song, index) => (
                            <li key={index} className="text-[18px]">
                                <strong>Title:</strong> {song.title} | <strong>Duration:</strong> {song.duration} | <strong>Genre:</strong> {song.genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GetAlbum;
