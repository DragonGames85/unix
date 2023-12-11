import React from 'react';

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className: string;
}

export default function Card({ children, className, ...divProps }: ICard) {
    return (
        <div className={`rounded-xl shadow-lg text-black ${className}`} {...divProps}>
            {children}
        </div>
    );
}
