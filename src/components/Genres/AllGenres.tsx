import React from 'react';
import {Link} from "react-router-dom";

export const AllGenres = () => {
    const uniqueGenres = [
        "Dance-Pop",
        "Synthwave",
        "Pop",
        "Electropop",
        "Trap Pop",
        "Alt-Pop",
        "Acoustic Pop",
        "Dark Pop",
        "Indie Pop",
        "Dark R&B",
        "R&B",
        "Disco Pop",
        "Funk Pop",
        "Trap",
        "Rock",
        "Country Pop",
        "Pop Rock"
    ];

    return (
        <div className="grid gap-16 grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {
                uniqueGenres.map((item, index) => (
                    <Link
                        to={`/genres/${item}`}
                        key={index}
                        className="w-[300px] h-auto rounded-b-xl cursor-pointer">
                        <h3
                            className="text-[20px] text-white font-bold bg-gradient-to-r from-gold/50 to-darkblue rounded-t-xl pl-2"
                        >
                            {item}
                        </h3>
                        <img
                            className="rounded-b-xl w-full h-full"
                            src={`${process.env.PUBLIC_URL}/img/genres/Dance-Pop.jpg`}
                            alt="genre"
                        />
                    </Link>
                ))
            }
        </div>
    );
};
