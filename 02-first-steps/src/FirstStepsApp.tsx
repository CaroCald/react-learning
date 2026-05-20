import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo Switch",
    quantity: 3
  },
  {
    productName: "PlayStation 5",
    quantity: 2
  },
  {
    productName: "Xbox Series X",
    quantity: 1
  }
];
export function FirstStepsApp() {

  return (
    <>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter itemName="Nintendo Switch" quantity={3} />
      <ItemCounter itemName="PlayStation 5" quantity={2} />
      <ItemCounter itemName="Xbox Series X" quantity={1} /> */}

      {
        itemsInCart.map(
          item => <ItemCounter key={item.productName} itemName={item.productName} quantity={item.quantity} />
        )
      }
    </>
  )
} 