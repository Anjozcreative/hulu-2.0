import Image from 'next/image';
import HeaderOption from './HeaderOption';
import { 
    CheckBadgeIcon,
    RectangleStackIcon,
    HomeIcon,
    BoltIcon,
    MagnifyingGlassIcon,
    UserIcon,

 } from '@heroicons/react/24/outline';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderOption title = 'HOME' Icon = {HomeIcon} />
                <HeaderOption title = 'TRENDING' Icon = {BoltIcon} />
                <HeaderOption title = 'VERIFIED' Icon = {CheckBadgeIcon} />
                <HeaderOption title = 'COLLECTIONS' Icon = {RectangleStackIcon} />
                <HeaderOption title = 'SEARCH' Icon = {MagnifyingGlassIcon} />
                <HeaderOption title = 'ACCOUNT' Icon = {UserIcon} />
            </div>
            <Image
                className='hover:cursor-pointer object-contain'
                src= '/hulu.png'
                alt='Hulu Logo'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header;