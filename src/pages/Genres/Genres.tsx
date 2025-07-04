import React from 'react';
import AllGenres from "../../components/Genres";
// @ts-ignore
import {Helmet} from "react-helmet";

const Genres = () => {
        return (
        <>
            <Helmet>
                <meta property="og:title" content="All Music Genres" />
                <meta property="og:description"
                      content="Explore the diverse collection of music genres and discover your favorite artists." />
                <meta property="og:image" content="link-to-your-image" />
                <meta property="og:url" content="link-to-your-genres-page" />
                <meta property="og:type" content="website" />

                <meta name="telegram:card" content="summary" />
                <meta name="telegram:title" content="All Music Genres" />
                <meta name="telegram:description"
                      content="Dive into various music genres and find artists and albums you love on our platform." />
                <meta name="telegram:image" content="link-to-your-image" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="All Music Genres" />
                <meta name="twitter:description"
                      content="Discover a variety of music genres and their top artists here." />
                <meta name="twitter:image" content="link-to-your-image" />
            </Helmet>

            <h1 className="text-[64px] text-white text-center font-bold mb-[20px]">
                Genres
            </h1>

            <AllGenres/>
        </>
    );
};

export default Genres;
