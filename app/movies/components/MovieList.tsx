'use client';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';
import { Movie } from '../types';
import MoviesHeader from './MoviesHeader';
import { useState } from 'react';
import MovieRow from './MovieRow';

const MotionVariants = {
    container: {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    },
};

type Props = {
    movies: Movie[];
};

export default async function MovieList({ movies }: Props) {
    const [isGrid, switchView] = useState(false);

    if (isGrid)
        return (
            <>
                <MoviesHeader isGrid={false} switchView={switchView} />
                <motion.div
                    variants={MotionVariants.container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3"
                >
                    {movies.map(movie => (
                        <motion.div className="p-6" variants={MotionVariants.item}>
                            <MovieCard key={movie.id} movie={movie} />
                        </motion.div>
                    ))}
                </motion.div>
            </>
        );
    else
        return (
            <>
                <MoviesHeader isGrid={true} switchView={switchView} />
                <motion.ul
                    variants={MotionVariants.container}
                    initial="hidden"
                    animate="visible"
                    className="my-6 flex flex-col items-center"
                >
                    {movies.map(movie => (
                        <motion.li variants={MotionVariants.item} className="w-[75%] my-6">
                            <MovieRow key={movie.id} movie={movie} />
                        </motion.li>
                    ))}
                </motion.ul>
            </>
        );
}
