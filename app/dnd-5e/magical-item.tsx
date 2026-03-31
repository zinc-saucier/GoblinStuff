"use client"
import { useState, useEffect, SetStateAction,} from "react"


type itemThumb ={
    index:string, 
    name:string, 
    url:string
}
// if you can, figure out how to api querie for each thumb and get the image back for the thumb display.
type item={
    index: string,
    name: string,
    equipment_category:{
        index:string 
        name: string
        url: string
    },
    rarity:{
        name: string
    },
    variants: [],
    variant: boolean,
    desc: [],
    image: string,
    url:string, 
    Updated_at: string,

}
type itemList ={
    items: item[],
}
async function fetchMagicItems(setCount: { (value: SetStateAction<number>): void; (arg0: any): void },setThumb: { (value: SetStateAction<itemThumb[]>): void; (arg0: any): void }){

let data:any;
let itemList: item[] = [];

    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.dnd5eapi.co/api/2014/magic-items/`);
        data = await response.json();

        setThumb(data.results)
        setCount(data.count)
    
        
        console.log("API Response: ", data)
        } catch (error) {
            console.error("Error calling API", error);
        }
    };    
console.log("its the list! ",itemList)
    
    await callApi();
    return(true);
};



export default function MagicalItems() {
    const[items, setitems] = useState<any[]>([]);
    const[input,setInput] = useState("")
    const [count,setCount] =useState<number>(0)
    const [thumb,setThumb] =useState<itemThumb[]>([])

    useEffect(()=>{console.log()},[input])

    useEffect(()=>{fetchMagicItems(setCount,setThumb)})

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);}
    // const getitems = async () =>{
    //   const temp =  await fetchMagicItems(setCount,setThumb)
     
    //     setitems(temp)
    //     console.log(items)

    // }
    const filter =() =>{
        
    }
    return(
        <div>
            <input 
            type = "text"
            placeholder="Enter ingredient"
            className="border-black rounded-md p-2"
            value={input}
            onChange={onChangeText}
            />
             <button onClick={filter}>Search</button>
            <p>Results: {count}</p>
            {thumb.map((i:itemThumb, index:any)=>
            <div key={index}>
                <div>
                    
                    <li className= "border p-2 rounded mb-2 mt-2">
                        <p className = "font-medium">{`${i.name}`}</p> 
                        <p>{`url : ${i.url}`}</p>
                         
                    </li>
                </div>
            </div>)}
            
        </div>
    )


};