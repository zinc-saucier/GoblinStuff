import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row items-center m-2 p-2">
        <nav className="flex p-2 w-3/4 flex-row items-center justify-between flex-4">
          <Link href="/">Home</Link>
          <Link href="/sack">The Sack</Link>
          <Link href="/cart">Cart</Link>
        </nav>
    </div>
  );
}