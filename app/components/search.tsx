import { useState } from "react";

export default function SearchBar() {

    const [query, setQuery] = useState("")
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    };
    // use query to call api for specific item

    return (
        <div>
            <form>
                <input
                className={"border-2 border-amber-50"}
                type="text"
                id="name"
                name="name"
                placeholder="Search the sack"
                defaultValue={""}
                onChange={handleSearch}
                ></input>
                
                <input
                className={""}
                type="submit"
                id="submit"
                value="Search"
                />
            </form>
        </div>
    );
}