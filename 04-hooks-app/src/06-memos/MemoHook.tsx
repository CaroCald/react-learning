import React, { useCallback, useState } from 'react'
import { MyTitle } from './ui/MyTitle'
import { MySubtitle } from './ui/MySubtitle'

export const MemoHook = () => {
    const [title, settitle] = useState('Hola')
    const [subtitle, setsubtitle] = useState('Mundo')

    const callMyApi = useCallback(() => {
        console.log('Llamando a mi api')
    }, [])

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-thin text-white'>MemoApp</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyApi={callMyApi} />

            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => settitle('Adios')}>Cambiar titulo</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => setsubtitle('Universo')}>Cambiar subtitulo</button>

        </div>
    )
}
