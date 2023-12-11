import type { Metadata } from 'next';
import MovieList from '../components/MovieList';
import { MovieResponse } from '../types';

type Props = {
    params: {
        page: string;
    };
};

async function getData(page: string): Promise<MovieResponse> {
    const response = await fetch(`https://react-midterm.kreosoft.space/api/movies/${page}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error('Unable to get data');
    return response.json();
}

export async function generateMetadata({ params: { page } }: Props): Promise<Metadata> {
    return {
        title: page,
    };
}

export default async function Movies({ params: { page } }: Props) {
    const data = await getData(page);

    return <MovieList movies={data.movies} />;
}
