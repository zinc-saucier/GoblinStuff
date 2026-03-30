import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
        <nav className="flex flex-4 flex-row">
          <Link href="/">Home</Link>
          <Link href="/catalogue">catalogue</Link>
          <Link href="/cart">cart</Link>
          <Link href="/account">account</Link>
        </nav>
    </div>
  );
}