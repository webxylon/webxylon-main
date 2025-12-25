import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="text-2xl font-bold text-dark_black dark:text-white hover:opacity-80 transition-opacity duration-200">
            WEBXYLON
        </Link>
    );
};

export default Logo;
