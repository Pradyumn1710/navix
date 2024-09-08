export default function Explanation() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-8">
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-5xl font-bold text-center mb-8">What is NaviX?</div>
                <div className="text-2xl text-gray-700 mb-8">
                    Navix is an intelligent ship routing solution that adapts in real-time to ocean conditions like weather, currents, and waves for optimal navigation.
                </div>
                <div className="text-xl text-gray-600 space-y-4">
                    <div className="flex items-center">
                        <img src="fuel.png" alt="Fuel Optimization" className="h-8 w-8 mr-4" />
                        <div>
                            <strong>Fuel Optimization:</strong> Reduces unnecessary fuel consumption.
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="time.png" alt="Travel Time Optimization" className="h-8 w-8 mr-4" />
                        <div>
                            <strong>Travel Time Optimization:</strong> Minimizes voyage duration by selecting the most efficient routes.
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="safety.png" alt="Safety First" className="h-8 w-8 mr-4" />
                        <div>
                            <strong>Safety First:</strong> Prioritizes safe routes to protect the ship, crew, and cargo.
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="versatile.png" alt="Versatile for All Ship Types" className="h-8 w-8 mr-4" />
                        <div>
                            <strong>Versatile for All Ship Types:</strong> Works with various ship designs and sizes, adjusting for drift and other conditions.
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="Container ship-amico.svg" alt="Container ship" />
            </div>
        </div>
    );
}