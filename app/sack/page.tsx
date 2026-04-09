"use client"
import Header from "../components/header"
import Footer from "../components/footer"
import MagicalItems from "../dnd-5e/magical-item"
import { MagicItem } from "../components/item"
import { useEffect, useState } from "react";
import Item from "../components/item";

export default function catalogue() {
const[item, setitem] = useState<MagicItem>();
useEffect(()=>{console.log("passed item ", item)},[item])
    return(
        <div>
            <Header/>
            {/* body */}

            <div> 
                <div>
                    <MagicalItems setItem ={setitem}/>
                </div>
                <div>
                  <Item item ={item}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}