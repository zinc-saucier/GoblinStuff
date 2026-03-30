import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div>
      <Header/>
    </div>
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

    </main>
    <div>
      <Footer/>
    </div>
    </main>
  );
}
