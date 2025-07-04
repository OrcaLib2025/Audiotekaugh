import React from 'react';
// @ts-ignore
import { Helmet } from 'react-helmet';
import AllAuthors from '../../components/Author';

const Authors = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content="All Popular Artists" />
                <meta property="og:description"
                      content="Explore the collection of all popular artists and their albums." />
                <meta property="og:image" content="link-to-your-image" />
                <meta property="og:url" content="nothing" />
                <meta property="og:type" content="website" />

                <meta name="telegram:card" content="summary" />
                <meta name="telegram:title" content="All Popular Artists" />
                <meta name="telegram:description"
                      content="Discover a variety of artists and their latest albums on our platform." />
                <meta name="telegram:image" content="link-to-your-image" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="All Popular Artists" />
                <meta name="twitter:description"
                      content="Find out more about the top artists and their discography here." />
                <meta name="twitter:image" content="link-to-your-image" />
            </Helmet>
            <h1 className="text-[64px] text-white text-center font-bold mb-[20px]">
                Artists
            </h1>
            <AllAuthors />
        </React.Fragment>
    );
};

export default Authors;
