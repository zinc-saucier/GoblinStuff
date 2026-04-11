/*
* major components of list component:
* item details
* add to list
* add to cart
* 
*/
import { useState, useEffect } from "react";
import Item from "./item";
import { MagicItem } from "./item";
import MagicalItems from "../dnd-5e/magical-item";

type list = {
    itemList: MagicItem[]
}

export default function List({itemList}:list) {
  
  const [hasList, setHasList] = useState(false);
  useEffect(()=>{
    if(itemList != null){
      setHasList(true)
    }
    },[itemList])


    return(
      
        <div>
          <div>
            {!hasList && <p></p>}
          </div>
          <div>
            {hasList &&
            <ul id="list of items">
              {itemList.map((item, index) => (
                <Item
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  equipment_cat={item.equipment_cat}
                  rarity={item.rarity}
                  variant={item.variant} index={""} url={""} updated={""} image={""} api_ref={{
                    index: "",
                    name: "",
                    url: "",
                    updated: ""
                  }}                />
              ))}
            </ul>}
          </div>
        
        <div>A List of Things!
            <MagicalItems setItem={function (item: MagicItem) {
              throw new Error("Function not implemented.");
            } }/>
        </div>
      </div>
    );
}