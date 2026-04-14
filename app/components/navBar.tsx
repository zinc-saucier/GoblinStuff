
import Link from "next/link";

interface HeaderProps {
  currentPage: string;
}
export default function NavBar({ currentPage }: HeaderProps) {

  return (
    <div className="flex flex-row items-center m-2 p-2">
        <nav className="flex p-2 w-3/4 flex-row items-center justify-between flex-2">
    
          <Link href="/" className={currentPage === 'home' ? 'text-orange-600' : 'text-gray-900'}>The Goblin's Stash</Link>
          {/* <Link href="/sack">The Sack</Link> */}
          <Link href="/cart" className={currentPage === 'cart' ? 'text-orange-600' : 'text-gray-900'}>Cart</Link>
        </nav>
    </div>
  );
}