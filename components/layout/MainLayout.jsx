import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
    return (
        <div classname="flex min-h-screen flex-col bg-slate-950">

            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </div>
    )
}

export default MainLayout;