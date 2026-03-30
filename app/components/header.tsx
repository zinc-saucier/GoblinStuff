import Image from "next/image";
import Link from "next/link";
import NavBar from "./navBar";

export default function Header() {
  return (
    <div>
      
      <header>
        <h1>Welcome to the Goblin's Stash</h1>
        
        <NavBar/>
      </header>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
    </div>
  );
}