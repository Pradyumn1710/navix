export default function Impact() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="text-5xl font-bold text-center mb-8">Why Navix Matters</div>
            <Impact_1 />
            <Impact_2 />
            <Impact_3 />
        </div>
    );
}

export function Impact_1() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-gray-700 mb-4">
                    <div className="font-semibold mb-2 text-2xl">Fuel Savings:</div>
                    <div className="text-xl">Navix can reduce fuel consumption by up to 15%, leading to significant cost savings. For an average cargo ship, this could amount to saving $3,000 to $6,000 per voyage.</div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="fuel_consump_final.png" alt="Fuel Consumption" />
            </div>
        </div>
    );
}

export function Impact_2() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="Family_secutrity.png" alt="Family Safety" />
            </div>
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-xl text-gray-700 mb-4">
                    <div className="font-semibold mb-2">Improved Comfort and Safety:</div>
                    <div>With real-time weather analysis, Navix reduces the risk of delays or detours by up to 20%, enhancing passenger comfort and safety during the voyage.</div>
                    <div className="font-semibold mb-2 mt-4">Route Safety:</div>
                    <div>Ensures 98% safe passage by avoiding severe weather conditions and dangerous waters, protecting both passengers and crew.</div>
                </div>
            </div>
        </div>
    );
}

export function Impact_3() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-xl text-gray-700 mb-4">
                    <div className="font-semibold mb-2">Reduced Travel Time:</div>
                    <div>Optimized routes can shorten travel times by 10-12%, helping companies complete more voyages in the same timeframe and improving overall efficiency.</div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="Time_saving_final.png" alt="Time Reduced" />
            </div>
        </div>
    );
}