import Card from '@/app/components/card';
import { Movie, Review } from '../types';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress';

interface IMovieItem {
    movie: Movie;
}

export default function MovieCard({ movie }: IMovieItem) {
    const calcRating = (reviews: Review[]): number => {
        return Number(
            (
                reviews.reduce((result, review) => {
                    return result + review.rating;
                }, 0) / movie.reviews.length
            ).toFixed(1)
        );
    };
    const colorScheme: Record<number, { text: string; circle: string }> = {
        0: { text: 'text-red-500', circle: 'red' },
        1: { text: 'text-red-500', circle: 'red' },
        2: { text: 'text-red-500', circle: 'red' },
        3: { text: 'text-yellow-300', circle: 'yellow' },
        4: { text: 'text-yellow-300', circle: 'yellow' },
        5: { text: 'text-yellow-300', circle: 'yellow' },
        6: { text: 'text-yellow-300', circle: 'yellow' },
        7: { text: 'text-lime-300', circle: 'lime' },
        8: { text: 'text-lime-300', circle: 'lime' },
        9: { text: 'text-lime-300', circle: 'lime' },
        10: { text: 'text-lime-300', circle: 'lime' },
    };

    const movieRating = calcRating(movie.reviews);
    const ratingColor = colorScheme[Math.floor(movieRating)];

    return (
        <Card className="cursor-pointer w-full flex p-4">
            <img src={movie.poster} alt={`постер ${movie.name}`} />
            <div className='pl-4 h-full w-full text-center'>
                <h2 className="font-semibold text-4xl">
                    {movie.name} ({movie.year})
                </h2>
            </div>
        </Card>
    );
}
