/*
* major components of list component:
* item details
* add to list
* add to cart
* 
*/
import Item from "./item";
import { MagicItem } from "./item";


type list = {
    itemList: MagicItem[]
}

export default function List() {
    return(
        <div>
        <ul id="list of items">
          {/* {itemList.map((item, id) => (
            <Item
              key={id}
              name={item.name}
              desc={item.quantity}
              equipment_cat={item.category}
              rarity={item.rarity.name}
              variant={item.variant.name}
            />
          ))} */}
        </ul>
        </div>
    );
}