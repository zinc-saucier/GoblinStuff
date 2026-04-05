import Image from "next/image";
import { useState } from "react";
import NavBar from "./navBar";
import DisplayUserDetails from "./userdetails";
import Link from "next/link";
import SearchBar from "./search";

export default function Header() {
  const [user, setUser] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false)
  return (
    <div>
      
      <header className="flex flex-row items-center justify-center w-full">
        <h1>What will you pull from its nasty little bag?</h1>
      </header> 
      <div className="flex flex-row items-right justify-end w-full">
        <div className="flex flex-col">
          <div>{<DisplayUserDetails 
            name={user.length > 0 ? user : "Guest"}
            />}
          </div>
          <div>
            {!isLoggedin && <p><Link href="/login">Login/test</Link></p>}
            </div>
          </div>
          <div>
            {isLoggedin && <p><Link href="/account">Account</Link></p>}
          </div>
        </div>
      <div className="text-2xl"> 
        <NavBar/>
      </div>
      
      
    </div>
  );
}