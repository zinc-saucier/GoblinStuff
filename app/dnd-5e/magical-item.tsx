"use client"
import { useState, useEffect, SetStateAction, } from "react";



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
async function fetchMagicItems(setCount: { (value: SetStateAction<number>): void; (arg0: any): void; }, setThumbMaster: { (value: SetStateAction<itemThumb[]>): void; (arg0: any): void; }, thumbMaster: itemThumb[]){

let data:any;
let itemList: item[] = [];

    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.dnd5eapi.co/api/2014/magic-items/`);
        data = await response.json();

        setThumbMaster(data.results)
        console.log(thumbMaster)
        setCount(data.count)
    
        
        console.log("API Response: ", data)
        } catch (error) {
            console.error("Error calling API", error);
        }
    };    
    await callApi();
    return(true);
};

async function fetchIndividual(url:string) {
    let data:any;
    
    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.dnd5eapi.co${url}`);
        data = await response.json();

        let Item: item = data;
        console.log("Item selected: ",Item)
        
        } catch (error) {
            console.error("Error calling API", error);
        }
    };
    await callApi();
    return(true);
}

export default function MagicalItems() {
    const[items, setitems] = useState<any[]>([]);
    const[input,setInput] = useState("");
    const [count,setCount] =useState<number>(0);
    const [thumb,setThumb] =useState<itemThumb[]>([]);
    const [thumbMaster,setThumbMaster] = useState< itemThumb[]> ([]);

    useEffect(()=>{setThumb(thumbMaster)},[thumbMaster])

    useEffect(()=>{fetchMagicItems(setCount,setThumbMaster,thumbMaster)},[])

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);}
    // const getitems = async () =>{
    //   const temp =  await fetchMagicItems(setCount,setThumb)
     
    //     setitems(temp)
    //     console.log(items)

    // }
    const filter =() =>{
        let temp: itemThumb[] = [];
        let capitalized = input.charAt(0).toUpperCase() + input.slice(1)

        if(input){
            console.log(capitalized);
            console.log(thumbMaster.length)
            for (let i = 0; i < thumbMaster.length; i++) {
                if(thumbMaster[i].name.includes(capitalized)){
                    temp=[ ...temp, thumbMaster[i]];
                    
                }
            }
            setThumb(temp);
            setCount(temp.length);
        }
        else{
            setThumb(thumbMaster)
            setCount(thumbMaster.length)
        }

    }
    const handleSelect = (url: string) => {
        fetchIndividual(url);
    }

    return(
        <div>
            <input 
            type = "text"
            placeholder="Search by Name"
            className="border-black rounded-md p-2"
            value={input}
            onChange={onChangeText}
            />
             <button onClick={filter}>Search</button>
            <p>Results: {count}</p>
            <div style={{ height: '600px', overflowY: 'auto', border: '1px solid #ccc' }}>
            {thumb.map((i:itemThumb, index:any)=>
            
            <div key={index}>
                <div>
                    
                    <li className= "border p-2 rounded mb-2 mt-2" onClick={() => handleSelect(i.url)}>
                        <p className = "font-medium">{`${i.name}`}</p> 
                        <p>{`url : ${i.url}`}</p>
                         
                    </li>
                </div>
            </div>)}
            </div>
        </div>
    )


};

function capitalizer(input: string) {
    throw new Error("Function not implemented.");
}
