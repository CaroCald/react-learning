import { useCounter } from '@/hooks/useCounter'
import React, { useMemo } from 'react'
const heaveStuff = (interactionNumber: number) => {
    console.time('heaveStuff start')

    for (let i = 0; i < interactionNumber; i++) {
        console.log('Realizando una tarea pesada')
    }

    console.time('heaveStuff end')
    return `Heave stuff done with ${interactionNumber} interactions`


}
export const MemoCounter = () => {
    const { count, increment, decrement } = useCounter(40_000)
    const myMemo = useMemo(() => heaveStuff(count), [count])
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1>MemoCounter</h1>

            <h4>
                Counter: {count}
            </h4>
            <h4>
                Counter: {count}
            </h4>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={increment}>Increment</button>
        </div>
    )
}
