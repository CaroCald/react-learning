import { useState } from "react"

export const useCounter = (initialValue: number = 5) => {
    const [counter, setCounter] = useState(initialValue)
    const handleSusbtract = () => {
        setCounter((prevState) => prevState - 1)
    }
    const handleReset = () => {
        setCounter(initialValue)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return {
        counter,
        handleDecrement,
        handleSusbtract,
        handleReset
    }
}
