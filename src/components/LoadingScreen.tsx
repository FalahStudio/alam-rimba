export default function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#121212] text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            <p className="ml-4 text-lg">Loading...</p>
        </div>
    );
}
