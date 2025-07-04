import React, { useEffect, useState } from "react";
import { Author } from "./Author";
import { Music } from "../../models/music"; // Импорт модели Music

export const AllAuthors: React.FC = () => {
    const [authors, setAuthors] = useState<Music[]>([]); // Храним массив объектов типа Music
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch(`http://localhost:5000/musics/allMusic`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch authors");
                }

                const data: Music[] = await response.json();
                setAuthors(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Error loading authors");
                setLoading(false);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <div className="flex flex-col">
            {authors &&
                authors.map((author) => (
                    <Author key={author.id} author={author} />
                ))}
        </div>
    );
};
