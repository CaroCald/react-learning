import type { CSSProperties } from "react";

const firstName = 'Carolina';
const lastName = 'Calderon';

const favortiteColor = ['blue', 'red', 'green'];
const isActive = true;
const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
};

const myStyle: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: '5px',
    padding: '10px',
}
export function MyAwesomeApp() {



    return (
        <div>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>My favorite colors are: {favortiteColor.join(', ')}</p>

            <p>{isActive ? 'I am active' : 'I am not active'}</p>

            <p> {address.street}</p>

            <p style={myStyle}

            >Json: {JSON.stringify(address)}</p>
        </div>
    );
}