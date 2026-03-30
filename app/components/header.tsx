import Image from "next/image";
import NavBar from "./navBar";

export default function Header() {
  return (
    <div>
      
      <header className="flex flex-row items-center justify-center w-full">
        <h1>What will you pull from its nasty little bag?</h1>
      </header>  
        <NavBar/>
      
    </div>
  );
}