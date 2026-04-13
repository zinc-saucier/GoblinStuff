import { useState, useEffect } from "react";
import { MagicItem } from "./item";
import CartItem from "./cartItem";

type list = {
    itemList: MagicItem[]
}

export default function List({itemList}:list) {
  


  const [hasList, setHasList] = useState(false);
  const [list, setList] = useState(itemList);
  useEffect(()=>{
      setHasList(false)
    if(itemList != null){
      setList(itemList)
      setHasList(true)
    }
    },[itemList])


    return(
      
        <div>
          <div>
            {!hasList && <div></div>}
            {hasList &&
            <ul id="list of items">
              <p>Your Cart</p>
              <li>{list.map((item, index) => (
                <CartItem 
                key={index}
                index={item.index} 
                name={item.name} 
                url={item.url} 
                updated={""} 
                desc={item.desc} 
                image={""} 
                equipment_category={{
                  index: `${item.equipment_category.index}`,
                  name: `${item.equipment_category.name}`,
                  url: `${item.equipment_category.url}`
                }} 
                rarity={{
                  name: `${item.rarity.name}`
                }} 
                variant={false}/>
              ))}</li>
            </ul>}
          </div>        
      </div>
    );
}