import { use, useEffect, useState } from "react";
const colors = {
    red: 'bg-red-500 animated-pulse',
    yellow: 'bg-yellow-500 animated-pulse',
    green: 'bg-green-500 animated-pulse',
}

type LightColor = keyof typeof colors;
export const TrafficLightWithEffect = () => {

    const [light, setlight] = useState<LightColor>('red');

    const [countDown, setcountDown] = useState(5)
    useEffect(() => {
        if (countDown === 0) return;

        const interval = setInterval(() => {
            setcountDown(prev => prev - 1);
        }, 1000);

        // es la funcion que se ejecuta cuando se desmonta el componente
        return () => {
            clearInterval(interval);
        };
    }, [countDown]);

    useEffect(() => {

        if (countDown > 0) {
            return;
        }
        setcountDown(5);

        if (light === 'red') {
            setlight('green');
            return;
        } else if (light === 'green') {
            setlight('yellow');
            return;
        } else if (light === 'yellow') {
            setlight('red');
            return;
        }

    }, [countDown, light]);
    //use efect para disparar efectos secundarios cada vez que cambie el estado de la luz, como por ejemplo, cambiar automáticamente a la siguiente luz después de un tiempo determinado.

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h2 className="text-xl font-medium text-black dark:text-white">Semaforo con use effect</h2>
                <h2 className="text-xl font-medium text-black dark:text-white">{countDown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full transtion-all duration-1000 ease-linear"
                        style={
                            {
                                width: ` ${(countDown / 5) * 100}%`
                            }
                        }
                    ></div>
                </div>

                <div className={`w-32 h-32 
                    ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 
                    ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 
                    ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => setlight('red')}>
                        Rojo
                    </button>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => setlight('yellow')}>
                        Amarillo
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => setlight('green')}>
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};