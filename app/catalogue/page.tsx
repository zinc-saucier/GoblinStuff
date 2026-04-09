import Header from "../components/header"
import Footer from "../components/footer"
import MagicalItems from "../dnd-5e/magical-item"

export default function catalogue() {

    return(
        <div>
            <Header/>
            {/* body */}
            <div> 
            <MagicalItems/>
            </div>

            <Footer/>
        </div>
    )
}