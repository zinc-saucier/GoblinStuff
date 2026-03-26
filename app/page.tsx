import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/*Will turn this into a component so that it can be imported to all pages easily, header contains site name, log in info, and nav bar*/}
      <header>
        <h1>Welcome to the Goblin's Stash</h1>
        
        <nav>
          <Link href="/">Home</Link>
          <Link href="/catalogue">catalogue</Link>
          <Link href="/cart">cart</Link>
          <Link href="/account">account</Link>
        </nav>
      </header>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
    </div>
  );
}
