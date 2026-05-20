import { useState } from "react";
import "./ItemCounter.css";
interface ItemCounterProps {
    itemName: string;
    quantity?: number;

}

export function ItemCounter(
    { itemName, quantity = 1 }: ItemCounterProps
) {

    //siempre van al inicio los hooks
    //  Hooks siempre deben estar en mismo orden no pueden ir en if bucles

    //Siempre deben ire en componentes
    //Hooks deben empezar con use

    const [count, setCount] = useState(quantity);

    //
    const handleClick = () => {
        console.log(`Aumentar cantidad de ${itemName}`);
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }
    return (
        <section className="item-row">
            <span className="item-text" style={
                {
                    color: count === 1 ? "red" : "blue",
                }
            }
            >{itemName}</span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
    );
}