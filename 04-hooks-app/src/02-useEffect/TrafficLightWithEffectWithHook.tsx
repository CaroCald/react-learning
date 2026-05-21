import { useTrafic } from "../hooks/useTrafic";

export const TrafficLightWithEffectWithHook = () => {
    const { countDown, handleChangeLight, percentaje, redLight, yellowLight, greenLight } = useTrafic();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h2 className="text-xl font-medium text-black dark:text-white">Semaforo con use effect</h2>
                <h2 className="text-xl font-medium text-black dark:text-white">{countDown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full transtion-all duration-1000 ease-linear"
                        style={
                            {
                                width: ` ${percentaje}%`
                            }
                        }
                    ></div>
                </div>

                <div className={`w-32 h-32 
                    ${redLight} rounded-full`}></div>
                <div className={`w-32 h-32 
                    ${yellowLight} rounded-full`}></div>
                <div className={`w-32 h-32 
                    ${greenLight} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleChangeLight('red')}>
                        Rojo
                    </button>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleChangeLight('yellow')}>
                        Amarillo
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleChangeLight('green')}>
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};