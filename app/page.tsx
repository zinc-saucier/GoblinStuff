"use client"
import Header from "./components/header"
import Footer from "./components/footer"
import MagicalItems from "./dnd-5e/magical-item"
import { MagicItem } from "./components/item"
import { useEffect, useState } from "react";
import Item from "./components/item";
import Image from "next/image"


export default function catalogue() {

    const[item, setitem] = useState<MagicItem>();

    return(
        <div>
            <Header/>
            <main className="flex min-h-screen w-full justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">

            <div className="grid grid-flow-col grid-cols-2 gap-10 justify-center mr-2"> 
                <div className="col-start-1 justify-center mt-17">
                  {item? <Item {...item!} /> : 
                    <div>
                        <Image
                            className=""
                            src="/images.png"
                            alt="my greasy sack"
                            height={600}
                            width={200}
                            priority
                            />
                    </div>}
                </div>
                <div className="col-start-2 justify-center">
                    <MagicalItems setItem ={setitem}/>
                </div>
                
            </div>
            </main>
            <Footer/>
        </div>
    )
}