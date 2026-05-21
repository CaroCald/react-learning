import React, { useEffect, useState } from 'react'

type LightColor = 'red' | 'green' | 'yellow';
const colors = {
    red: 'bg-red-500 animated-pulse',
    yellow: 'bg-yellow-500 animated-pulse',
    green: 'bg-green-500 animated-pulse',
}

export const useTrafic = () => {
    const [light, setlight] = useState<LightColor>('red');

    const handleChangeLight = (color: LightColor) => {
        setlight(color);
    }
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

    return {
        light,
        countDown,
        colors,

        //
        percentaje: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        handleChangeLight
    }
}
