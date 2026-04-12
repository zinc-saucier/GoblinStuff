/*
* major components of item card:
* item details
* add to list
* add to cart
* 
*/
"use client"
import { useEffect, useState } from "react";
import * as CRUD from "@/service/firebase_crud";
import { useUserStore } from "@/util/store";
import {auth} from "@/util/firebase"

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
    api_ref: {
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


export default function Item(item: MagicItem) {

    const [hasItem, setHasItem] = useState(false)
   
    useEffect(()=>{
        if(item!=null){
            setHasItem(true);
        }
    },[item])

    let itemList:MagicItem[] = [];

    const handleSelect = (item:MagicItem) => {
        console.log("item: ", { item }, "added to list");
        CRUD.addToCart(`${auth.currentUser?.uid}`, item)
           
        console.log("user:", `${auth.currentUser?.displayName}`)
        console.log(itemList);
    }
    // const handleVariant = (item: MagicItem) => {

    // }

    return(
        <div>
            <div>
            {!hasItem && <p></p>}
            </div>
            <div>{hasItem &&
            <li key={item.name}>
                <h2 className="text-2xl text-orange-400 text-center" >{item.name}</h2>
                <img src={ `https://www.dnd5eapi.co${item.image}`} height={250} width={250} alt="No image available" className="ml-61 border-2 border-black"/>
                <div className="flex justify-between flex-row flex-wrap mb-3">
               
                    <p className="text-x1 text-orange-400 "> Type: {item.desc[0]} </p> 
                </div>
                <p className="mb-3">Description: {item.desc[1]}</p>

                <p className="mb-3">Category: {item.equipment_category.name}</p>
                <p className="mb-3">Rarity: {item.rarity ? item.rarity.name: "Varies"}</p>
                {/* <p className="text-lg" onClick={() => handleVariant(item.variants ?item.variants.name : "no variant")}>Variant: {item.variants ? item.variants.name : "none" }</p> */}
                <button onClick={()=> handleSelect(item)} className="border-2 border-orange-300 text-orange-300 p-3 rounded-full">
                Add to list
                </button>
            </li>}
            </div>
        </div>
    );
}