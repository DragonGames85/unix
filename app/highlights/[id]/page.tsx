import { Metadata } from 'next';

type Props = {
    params: { id: string };
};

async function getData(id: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        next: { revalidate: 60 },
    });

    if(!response.ok) throw new Error("Unable to get data")

    return response.json();
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    return {
        title: id,
    };
}

export default async function HighLight({ params: { id } }: Props) {
    const post = await getData(id);

    return (
        <>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
        </>
    );
}
