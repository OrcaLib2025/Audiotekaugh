import React, {useEffect, useState} from "react";
import MusicByAuthor from "../../components/Music/MusicByAuthor";
import {Music as AuthorData} from "../../models/music";
import useAuthorName from "../../hooks/useAuthorName";

const Author = () => {
    const author = useAuthorName();
    const [authorData, setAuthorData] = useState<AuthorData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAuthorData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/musics/musicByAuthor`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title: author}),
            });

            if (!response.ok) {
                console.log(`Error fetching author data: ${response.statusText}`);
            }

            const data: AuthorData = await response.json();
            // @ts-ignore
            setAuthorData(data[0]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuthorData();
    }, [fetchAuthorData]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <h1 className="text-[64px] text-white text-center font-bold mb-[20px]">
                {author}
            </h1>
            <div title="artist" className="flex flex-row">
                <img
                    title="artist photo"
                    src={
                        authorData?.artistImage?.includes('example') || !authorData?.artistImage
                            ? `${process.env.PUBLIC_URL}/img/artist_unkwn.png`
                            : authorData?.artistImage
                    }
                    width="512px"
                    height="512px"
                    className="mx-[64px] mb-[20px] rounded-xl"
                    alt={authorData?.artist}
                />

                <div title="artist info" className="text-[24px] text-sonicsilver">
                    {authorData?.artist ? (
                        <p>{`Artist Name: ${authorData.artist}`}</p>
                    ) : (
                        <p>No additional information available.</p>
                    )}
                </div>
            </div>
            <MusicByAuthor songs={authorData && authorData.songs}/>
        </React.Fragment>
    );
};

export default Author;
