export interface MovieResponse {
    movies: Movie[];
    pageInfo: PageInfo
}

export interface Movie {
    id: string;
    name: string;
    poster: string;
    year: number;
    country: string;
    genres: Genre[];
    reviews: Review[];
}

export interface Genre {
    id: string;
    name: string;
}

export interface Review {
    id: string;
    rating: number;
}

export interface PageInfo {
    pageSize: number;
    pageCount: number;
    currentPage: number;
}