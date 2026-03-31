"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchBar from "./components/search";

export default function Home() {
  return (
    <main>
      <div>
      <Header/>
    </div>
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex items-center flex-row">
        <Image
          className=""
          src="/images.jfif"
          alt="my greasy sack"
          height={500}
          width={200}
          priority
        />
    

      </div>
    </main>
    <div>
      <Footer/>
    </div>
    </main>
  );
}
