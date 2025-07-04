import React from 'react';
import {Song as MusicModel} from "../../models/music";
import {Link} from "react-router-dom";

interface AuthorProps {
    music: MusicModel[] | null;
}

const MusicCard: React.FC<AuthorProps> = ({music}) => {
    return (
        <React.Fragment>
            {music && music.length > 0 ? (
                music.map((item, index) => (
                    <div key={index}
                         className="w-[100%] h-auto flex flex-row mx-[64px] bg-gray-800 rounded-xl mb-[16px]">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/nota.png`}
                            alt="music"
                            title="music-icon"
                            className="max-w-[52px] max-h-[52px] bg-violet-300 rounded-xl mr-[10px]"/>

                        <div className="w-full h-auto flex flex-col justify-start">
                            <h1 className="flex flex-row text-orange-300 text-[20px] font-bold">
                                <Link to={`/artists/${item.artist}`} className="text-violet-500 underline">
                                    {item.artist}
                                </Link> -
                                {" " + item.title || "Music name"}
                            </h1>

                            <p className="text-gray-500 text-[16px]">
                                {item.description || "Music - descriptions"}
                            </p>
                        </div>

                        <p className="m-[12px] text-sonicsilver">
                            {item.duration || "00:00"}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-center text-white">No music available</p>
            )}
        </React.Fragment>
    );
};

export default MusicCard;
