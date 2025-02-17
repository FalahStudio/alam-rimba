import { useState, useEffect } from "react";
import App from "../pages/App";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import LoadingScreen from "../components/LoadingScreen";


export default function MainLayout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasi menunggu semua data dan gambar selesai dimuat
        const images = document.images;
        let loaded = 0;
        const total = images.length;

        if (total === 0) {
            setIsLoading(false);
            return;
        }

        const checkImagesLoaded = () => {
            loaded += 1;
            if (loaded === total) {
                setIsLoading(false);
            }
        };

        // Cek jika semua gambar sudah ter-load
        Array.from(images).forEach((img) => {
            if (img.complete) {
                checkImagesLoaded();
            } else {
                img.addEventListener("load", checkImagesLoaded);
                img.addEventListener("error", checkImagesLoaded);
            }
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Header />
                    <main className="max-w-full px-4 overflow-hidden">
                        <App />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}
