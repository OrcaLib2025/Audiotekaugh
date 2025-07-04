import React from "react";
import { Music } from "../../models/music";
import { Link } from "react-router-dom";

interface AuthorProps {
    author: Music;
}

export const Author: React.FC<AuthorProps> = ({ author }) => {
    return (
        <Link
            to={`/artists/${author.artist}`}
            className="flex flex-row justify-between items-center mb-[20px] cursor-pointer">
            <div className="w-[100%] h-auto flex flex-row mx-[64px] bg-gray-800 rounded-xl">
                <img
                    src={`${process.env.PUBLIC_URL}/img/artist_unkwn.png`}
                    title="music-icon"
                    className="max-w-[128px] max-h-[128px] w-[128px] h-[128px] bg-gray-200 rounded-l-xl mr-[10px]"
                    alt={author.artist}
                />

                <div className="w-full h-auto flex flex-col justify-start">
                    <h1 className="text-white text-[32px] font-bold">
                        {author.artist}
                    </h1>

                    <p className="text-gray-500 text-[16px]">
                        {author.description || "No description available"}
                    </p>

                    <p className="text-gray-500 text-[16px]">
                        Most popular song: {author.mostPopularSong?.title || "N/A"}
                    </p>

                    <p className="text-gray-500 text-[16px]">
                        Songs on site: {author.songs?.length || 0}
                    </p>
                </div>
                <div className="text-[32px] text-gray-200 mt-[32px] mr-[10px]">
                    {author.rating || "N/A"}
                </div>
            </div>
        </Link>
    );
};
