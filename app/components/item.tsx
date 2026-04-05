/*
* major components of item card:
* item details
* add to list
* add to cart
* 
*/
import { useState } from "react";

export type MagicItem = {
    index?: string,
    name: string,
    url?: string,
    desc: string,
    image?: string,
    equipment_cat: string,
    api_ref?: {
        index: string,
        name: string,
        url: string
    }
    rarity: {
        name: string,
        // values: ['Varies','Common','Uncommon','Rare','Very Rare','Legendary','Artifact']
    }
    variants?: {
        index: string,
        name: string,
        url: string
    }
    variant: boolean
};

export default function Item(item: MagicItem) {
    let itemList = [];
    const handleSelect = (name: string) => {
        console.log("item: ", { item }, "added to list")
        itemList.push(
            <Item
                key={name}
                name={item.name}
                desc={item.desc}
                equipment_cat={item.equipment_cat} rarity={{
                    name: ""
                }} variant={false}              
            />
        )
    }
    const handleVariant = (name: string) => {

    }

    return(
        <div>
            <li key={item.name} className="place-items-left">
                <img src={item.image ? item.image : "no image"} height={200} width={200}/>   
                <p className="text-xl text-orange-400">Item: {item.name}</p>
                
                <p className="text-lg">Description: {item.desc}</p>
                <p className="text-lg">Category: {item.equipment_cat}</p>
                <p className="text-lg">Rarity: {item.rarity ? item.rarity.name: "Varies"}</p>
                <p className="text-lg" onClick={() => handleVariant(item.variants ?item.variants.name : "no variant")}>Variant: {item.variants ? item.variants.name : "none" }</p>
                <p className="text-lg text-orange-400" onClick={()=> handleSelect(item.name)}>Add to list</p>
            </li>
        </div>
    );
}