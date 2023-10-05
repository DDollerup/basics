import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Header />
            Hello
            <main className="container-fluid my-3">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;