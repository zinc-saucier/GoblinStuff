import Image from "next/image";
import NavBar from "./navBar";

export default function Footer() {
  return (
    <div>
        <NavBar/>
        <footer className="flex flex-1 flex-col items-center justify-center text-xs">
            <h1 className="flex  items-center">You've found the bottom of the bag!</h1>
            <p>idk how you found the bottom, it's a bottomless bag... </p>
            <p>I'm gonna have words with that gnome...</p>
      </footer>
    </div>
  );
}