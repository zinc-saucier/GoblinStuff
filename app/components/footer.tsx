import Image from "next/image";
import Link from "next/link";
import NavBar from "./navBar";

export default function Footer() {
  return (
    <div>
      <footer>
        <h1>You've found the bottom of the bag</h1>
        <p>

        </p>
        
        <NavBar/>
      </footer>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
    </div>
  );
}