"use client"
import Header from "../components/header"
import Footer from "../components/footer"
import MagicalItems from "../dnd-5e/magical-item"
import { MagicItem } from "../components/item"
import { useEffect, useState } from "react";
import Item from "../components/item";

export default function catalogue() {
const[item, setitem] = useState<MagicItem>();

    return(
        <div>
            <Header/>
            {/* body */}

            <div className="grid grid-flow-col grid-cols-2 gap-10 border-b-4 justify-center ml-2 mr-2"> 
                <div className="col-start-1">
                    <MagicalItems setItem ={setitem}/>
                </div>
                <div className="col-start-2 justify-center mt-17">
                  {item? <Item {...item!} /> : <div></div>}
                </div>
            </div>

            <Footer/>
        </div>
    )
}