import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero_Header() {
    const navigate = useNavigate();

    const handleMapClick = () => {
        navigate('/map');
    };

    return (
        <div className="flex">
            <div className="h-screen w-1/2 p-2">
                <div className="grid place-content-center h-full">
                    <div className="text-7xl font-bold mb-4">NaviX</div>
                    <div className="text-2xl mb-8">Advanced ship routing solution that optimizes</div>
                    <div className="flex justify-center space-x-4">
                        <Button onClick={handleMapClick}>Map</Button>
                        <div className="p-2 pl-4 underline cursor-pointer">Explore</div>
                    </div>
                </div>
            </div>
            <div className="h-screen w-1/2">
                <img className="h-full w-full object-cover" src="Container ship-amico.svg" alt="Container ship" />
            </div>
        </div>
    );
}