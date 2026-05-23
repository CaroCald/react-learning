import React from 'react'

interface MySubtitleProps {
    subtitle: string;
    callMyApi?: () => void;
}

export const MySubtitle = React.memo(({ subtitle, callMyApi }: MySubtitleProps) => {
    console.log('Renderizando MySubtitle')
    return <>
        <h6>{subtitle}</h6>
        <button className='bg-indigo-500 text-white px-2 rounded-md' onClick={callMyApi}>
            Llamar a funcion
        </button>
    </>
})   
