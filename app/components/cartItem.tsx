
"use client"
import { useEffect, useState } from "react";
import * as CRUD from "@/service/firebase_crud";
import {auth} from "@/util/firebase"
import { useUserStore } from "@/util/store";

export type MagicItem = {
    index: string,
    name: string,
    url: string,
    updated: string,
    desc: string,
    image: string,
    equipment_category: {
        index: string,
        name: string,
        url: string,
    },
    api_ref?: {
        index: string,
        name: string,
        url: string,
        updated: string,
    }
    rarity: {
        name: string,
    }
    variants?: [index: string,{
        name: string,
        url: string
        updated: string,
    }]
    variant: boolean
}


export default function CartItem(item: MagicItem) {

    const user = useUserStore((state) => state)
    const [hasItem, setHasItem] = useState(false)
   
    useEffect(()=>{
        if(item!=null){
            setHasItem(true);
        }
    },[item])

    const handleSelect = (item:MagicItem) => {
        console.log("item: ", { item }, "removed from list");
        CRUD.removeFromCart(`${user.id}`, item)
        
    }      
       
    

    return(
        <div>
            <div>
            {!hasItem && <p></p>}
            </div>
            <div>
            <ul>{hasItem &&
            <li className="m-12" 
            key={item.name}>
                <h2 className="text-2xl text-orange-400 text-center" >{item.name}</h2>
                {/* <div className="flex flex-1 sm:items-center m-15 ">
                    <img src={ `https://www.dnd5eapi.co${item.image}`} 
                        height={100} 
                        width={100} 
                        alt="No image available" 
                        className="border-2 border-black dark:border-gray-400 sm:items-start"/>
                </div> */}
                <div className="flex justify-between flex-row flex-wrap mb-3">
               
                    <p className="text-x1 text-orange-400 "> Type: {item.desc[0]} </p> 
                </div>
                <p className="mb-3">Description: {item.desc[1]}</p>

                <p className="mb-3">Category: {item.equipment_category.name}</p>
                <p className="mb-3">Rarity: {item.rarity ? item.rarity.name: "Varies"}</p>
                {/* <p className="text-lg" onClick={() => handleVariant(item.variants ?item.variants.name : "no variant")}>Variant: {item.variants ? item.variants.name : "none" }</p> */}
                <button onClick={()=> handleSelect(item)} className="border-2 border-orange-300 text-orange-300 p-3 rounded-full">
                Remove from cart
                </button>
            </li>}</ul>
            </div>
        </div>
    );
}