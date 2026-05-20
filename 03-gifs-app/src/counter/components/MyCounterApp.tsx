import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {


    const { counter, handleDecrement, handleSusbtract, handleReset } = useCounter()

    return (
        <div>
            <h2>MyCounterApp</h2>

            <button onClick={handleDecrement}>Increment</button>
            <p>Counter: {counter}</p>
            <button onClick={handleSusbtract}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
