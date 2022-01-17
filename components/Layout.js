import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return(
        <>
            <Navbar />
            <div id="genbaneko">{children}</div>
            <Footer />
        </>
    )
}