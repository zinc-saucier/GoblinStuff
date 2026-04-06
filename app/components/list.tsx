/*
* major components of list component:
* item details
* add to list
* add to cart
* 
*/
import MagicalItems from "../dnd-5e/magical-item";

export default function List() {
    return(
        <div>A List of Things!
            <MagicalItems/>
        </div>
        
    );
}