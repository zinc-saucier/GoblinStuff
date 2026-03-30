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
    <div>
      <Footer/>
    </div>
    </main>
  );
}
