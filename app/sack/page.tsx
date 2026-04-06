import Header from "../components/header";
import Footer from "../components/footer";
import MagicalItems from "../dnd-5e/magical-item";
import Image from "next/image";
import Item from "../components/item";

export default function Home() {
  return (
    <main>
      <div>
      <Header/>
    </div>
    <main className="flex min-h-screen w-full flex-3 flex-row justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-3 w-full flex-row justify-evenly">
        <div>
          <Item name={""} desc={""} image={""} equipment_cat={""} variant={false} index={""} url={""} updated={""} api_ref={{
                          index: "",
                          name: "",
                          url: "",
                          updated: ""
                      }} rarity={{
                          name: ""
                      }}/>
        </div>
        <div className="flex flex-col items-center justify-center w-full m-2 p-2">
                 
          <Image
            className=""
            src="/images.jfif"
            alt="my greasy sack"
            height={600}
            width={200}
            priority
          />
        </div>
        
        <div>
          <MagicalItems/>
        </div>
      </div>
    </main>
    <div>
      
      <Footer/>
    </div>
    </main>
  );
}