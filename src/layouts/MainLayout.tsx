import App from "../pages/App";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <>
            <Header />

            <main className="max-w-full px-4 overflow-hidden">
                <App />
            </main>

            <Footer />
        </>
    )
}
