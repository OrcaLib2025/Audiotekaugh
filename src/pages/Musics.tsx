import React from 'react';
import AllMusics from '../components/Music';
// @ts-ignore
import {Helmet} from "react-helmet";

const Musics = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content="All Music Collection" />
                <meta property="og:description" content="Browse through our extensive collection of music, albums, and artists." />
                <meta property="og:image" content="link-to-music-image" />
                <meta property="og:url" content="nothing" />
                <meta property="og:type" content="website" />

                <meta name="telegram:card" content="summary" />
                <meta name="telegram:title" content="All Music Collection" />
                <meta name="telegram:description" content="Discover a wide variety of music genres and albums." />
                <meta name="telegram:image" content="link-to-music-image" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="All Music Collection" />
                <meta name="twitter:description" content="Explore the full catalog of music, from top hits to hidden gems." />
                <meta name="twitter:image" content="link-to-music-image" />
            </Helmet>

            <h1 className="text-[64px] text-white text-center font-bold mb-[20px]">Musics</h1>
            <AllMusics />
        </React.Fragment>
    );
};

export default Musics;
