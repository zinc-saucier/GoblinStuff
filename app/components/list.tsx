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
                rarity={{ name: `${item.rarity.name}` }} index={""} url={""} updated={""} image={""} api_ref={{
                  index: `${item.api_ref.index}`,
                  name: "",
                  url: "",
                  updated: ""
                }} variant={false}                  
              />
            ))}
          </ul>}
        </div>
      </div>
        
        
    );
}