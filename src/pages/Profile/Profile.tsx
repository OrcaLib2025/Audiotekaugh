import React, { useState, useEffect } from 'react';
import QuitButton from "../../components/QuitButton";

export const Profile: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);  // Состояние редактирования
    const [formData, setFormData] = useState<{ username: string, description: string }>({
        username: '',
        description: '',
    });  // Все данные для редактирования

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setErrorMessage(null);

            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    setErrorMessage('No token found, please login.');
                    setLoading(false);
                    return;
                }

                const response = await fetch('http://localhost:5000/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const data = await response.json();
                    setErrorMessage(data.message || 'Failed to fetch profile');
                } else {
                    const data = await response.json();
                    setUserData(data);
                    setFormData({ username: data.username, description: data.description || '' });
                }
            } catch (error) {
                setErrorMessage('An error occurred while fetching the profile');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setErrorMessage('No token found, please login.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/auth/updateProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.message || 'Failed to update profile');
            } else {
                const data = await response.json();
                setUserData(data);
                setIsEditing(false);
            }
        } catch (error) {
            setErrorMessage('An error occurred while updating the profile');
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;

    if (errorMessage) return <p>{errorMessage}</p>;

    return (
        <div className="p-8 flex flex-col justify-center items-center max-w-[1680px] w-full text-lightgray">
            {userData ? (
                <div className="space-y-4 w-full h-auto">
                    <div className="w-auto h-auto flex flex-col items-center">
                        <img
                            src="/img/artist_unkwn.png"
                            alt="user"
                            className="w-full h-full max-w-[400px] max-h-[400px]"
                            width="400px"
                            height="400px"
                        />
                        <div className="flex flex-col justify-start items-center gap-2">
                            {/* Имя пользователя */}
                            {isEditing ? (
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="border p-2 rounded-md"
                                    />
                                </div>
                            ) : (
                                <p className="text-[96px] lg:text-[72px] md:text-[52px]">
                                    <strong>{userData.username}</strong>
                                </p>
                            )}

                            {
                                userData.git === 'git'
                                    ? <div className="text-red-600 text-[20px] font-bold">U authorized from GitHub</div>
                                    : null
                            }

                            {/* Описание */}
                            {isEditing ? (
                                <div className="flex flex-col items-center gap-1">
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="border p-2 rounded-md"
                                    />
                                    <div className="w-[120px]">
                                        <button
                                            onClick={handleSave}
                                            className="w-full bg-musicname text-white p-2 rounded-md mb-2"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="w-full bg-gray-500 text-white p-2 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p>{userData.description || 'No description available'}</p>
                            )}

                            {/* Кнопка редактирования */}
                            <button
                                onClick={() => setIsEditing(true)}
                                className="mt-4 bg-footerblack text-white p-2 rounded-md hover:bg-musicname duration-200"
                            >
                                Edit Profile
                            </button>

                            <QuitButton/>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};
