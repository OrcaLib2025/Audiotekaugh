import React from 'react';

export const Loading = () => {
    return (
        <div className="grid grid-cols-4 gap-12 w-full h-full">
            {Array(16).fill(0).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-800 rounded-xl w-[300px] h-[300px]"
                />
            ))}
        </div>
    );
};
