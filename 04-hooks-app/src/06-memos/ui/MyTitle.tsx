import React from "react"

interface MyTitleProps {
    title: string
}
export const MyTitle = React.memo(({ title }: MyTitleProps) => {
    console.log('Renderizando MyTitle')
    return (
        <h1>{title}</h1>
    )
})  
