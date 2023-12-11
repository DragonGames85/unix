import Card from '@/app/components/card';
import { Movie, Review } from '../types';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress';

interface IMovieItem {
    movie: Movie;
}

export default function MovieRow({ movie }: IMovieItem) {
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
        <Card className="cursor-pointer w-full flex bg-[#98ccee]">
            <img src={movie.poster} className="p-4" alt={`постер ${movie.name}`} />
            <div className="flex justify-between gap-4 p-4 w-[80%]">
                <h2 className="font-semibold text-4xl">
                    {movie.name} ({movie.year})
                </h2>
            </div>
            <div className="bg-cyan-700 ml-auto w-[20%] flex flex-col items-center justify-center rounded-e-xl">
                <p className={`font-medium text-2xl mb-4 ${ratingColor.text}`}>Оценка</p>
                <CircularProgress color={ratingColor.circle} value={movieRating * 10} size="160px" thickness="16px">
                    <CircularProgressLabel color={ratingColor.circle}>{movieRating}</CircularProgressLabel>
                </CircularProgress>
            </div>
        </Card>
    );
}
