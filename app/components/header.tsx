import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/logo.png';

const Header = () => {
    return (
        <header className="flex justify-between p-4">
            {/* <Image width={90} height={90} src={Logo} alt="" /> */}
            <nav className="w-full">
                <ul className="flex gap-16 p-8 justify-between">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="/movies/1">Список фильмов </Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
