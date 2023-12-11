import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    isGrid: boolean;
    switchView: Dispatch<SetStateAction<boolean>>;
};

export default function MoviesHeader({ isGrid, switchView }: Props) {
    return (
        <div className="flex justify-end gap-4 w-full p-4 mb-8 ">
            <button onClick={() => switchView(prev => !prev)} className="border border-white w-fit p-2">
                {isGrid ? 'G' : 'R'}
            </button>
        </div>
    );
}
