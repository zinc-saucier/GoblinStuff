"use client"
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";
import { useEffect, useState } from "react";
import { useUserStore } from "@/util/store";

export default function Cart() {

  const [isLoading, setLaoding] = useState(true)
  const user = useUserStore((state) => state)
  const setUser = useUserStore((state) => state.setUser)

  useEffect(()=>{
    console.log(user)
      if(user!=null){
        setLaoding(false) 
      }
  },[user])

  useEffect(()=> {
    setUser(user.user, user.id, user.cart)
  },[user.cart])
  
  
return(
        <div>
            <Header/>
            <main className="flex min-h-screen w-full justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">

            <div className="grid grid-flow-col grid-cols-2 gap-10 justify-center mr-2"> 
                <div className="col-start-1 justify-center mt-17">
                   {!user && <p></p>}
                    {!isLoading && <List itemList={user.cart!}/>}
                </div>
                <div className="col-start-2 justify-center">
                    <Image
                      className=""
                      src="/images.jfif"
                      alt="my greasy sack"
                      height={600}
                      width={200}
                      priority
                    />
                </div>
                
            </div>
            </main>
            <Footer/>
        </div>
    )
 
}
