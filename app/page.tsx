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
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="">
        {/* <link>Reach into the goblin's sack</link>
        <link>I'm looking for something specific</link> */}

      </div>
    </main>
    <div>
      <Footer/>
    </div>
    </main>
  );
}
