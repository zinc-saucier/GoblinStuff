"use client"
import { useState, useEffect, SetStateAction, Dispatch, } from "react";
import{ MagicItem } from "../components/item";



type itemThumb ={
    index:string, 
    name:string, 
    url:string
}
// if you can, figure out how to api querie for each thumb and get the image back for the thumb display.

type selected={
    setItem: (item:MagicItem)=>any
}
async function fetchMagicItems(setCount: { (value: SetStateAction<number>): void; (arg0: any): void; }, setThumbMaster: { (value: SetStateAction<itemThumb[]>): void; (arg0: any): void; }, thumbMaster: itemThumb[]){

let data:any;
let itemList: MagicItem[] = [];

    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.dnd5eapi.co/api/2014/magic-items/`);
        data = await response.json();

        setThumbMaster(data.results)
        console.log(thumbMaster)
        setCount(data.count)
    
        
        
        } catch (error) {
            console.error("Error calling API", error);
        }
    };    
    await callApi();
    return(true);
};

async function fetchIndividual(url:string,setItem: ((arg0: any) => void)) {
    let data:any;
    let item: MagicItem = data;
    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.dnd5eapi.co${url}`);
        data = await response.json();

        let item: MagicItem = data;
        
        setItem(data);
        } catch (error) {
            console.error("Error calling API", error);
        }
    };
    await callApi();
    return(item);
}

export default function MagicalItems({setItem}:selected) {
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

        if(input){
            
            console.log(thumbMaster.length)
            for (let i = 0; i < thumbMaster.length; i++) {
                if(thumbMaster[i].name.toLowerCase().includes(input.toLowerCase())){
                    temp=[ ...temp, thumbMaster[i]];
                    
                }
            }
            setThumb(temp);
            setCount(temp.length);
            setInput("")
        }
        else{
            setThumb(thumbMaster)
            setCount(thumbMaster.length)
        }

    }
    const handleSelect = async (url: string) => {
        fetchIndividual(url,setItem);
    }
   

    return(
        <div>
            <div>
                <input 
                type = "text"
                placeholder="Search by Name"
                className=" border-2 border-gray-400 dark:border-white rounded-md p-2"
                value={input}
                onChange={onChangeText}
                
                />
                <button onClick={filter} className="">Search</button>
            </div>
            <div>
                <p>Results: {count}</p>
                <div style={{ height: '600px', overflowY: 'auto', border: '1px solid #ccc' }}>
                {thumb.map((i:itemThumb, index:any)=>
            
                    <div key={index}>
                        <div>
                            
                            <li className= "border p-2 rounded mb-2 mt-2" onClick={() => handleSelect(i.url)}>
                                <p className = "font-medium">{`${i.name}`}</p> 
                                
                                
                            </li>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )


};


