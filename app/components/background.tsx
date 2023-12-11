'use client';
import { animate, motion, scroll } from 'framer-motion';
import cinema from '../../public/cinema.png';
export default function Background() {
    // sroll animation when user scroll
    scroll(progress => {
        animate('#background', { transform: `rotate(${progress * 240}deg)` });
        animate('#background-reverse', {
            transform: `rotate(${progress * -240}deg)`,
        });
    });

    return (
        <>
            <motion.img
                id="background-reverse"
                src={cinema.src}
                style={{
                    position: 'fixed',
                    zIndex: -4,
                    right: -420,
                    bottom: -420,
                }}
            />
            <motion.img
                id="background"
                src={cinema.src}
                style={{
                    position: 'fixed',
                    zIndex: -4,
                    left: -420,
                    bottom: -420,
                }}
            />
        </>
    );
}
