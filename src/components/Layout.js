import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import layout from "../styles/layout.css";

function Layout (){
    return(
        <div>
            <Header />
            <div id="layoutDiv">
                <Main />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;