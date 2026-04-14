"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import { useUserStore } from "@/util/store";
import DisplayUserDetails from "./userdetails";
import Link from "next/link";


interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [isLoggedin, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
    }
  }, [user]);  

  const signOut = async () => {
    setUser("","",[]);
    setIsLoggedIn(false);
  };
  
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
            {!isLoggedin && <p><Link href="/login">Login</Link></p>}
            {/* {isLoggedin && <p><Link href="/account">Account</Link></p>} */}
            
          </div>
          <div>
            {!isLoggedin && <p ></p>}
            {isLoggedin && <p onClick={signOut}>Sign Out</p>}
          </div>
        </div>
      </div>
      <div className="text-2xl"> 
        <NavBar currentPage={currentPage}/>
      </div>
      
      
    </div>
  );
}