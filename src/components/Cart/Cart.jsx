import { Fragment, React, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {

  const { products, total, clearCart, removeItem } = useContext(CartContext);

  console.log("Productos en carro", products);
  console.log("El total es de: ", total);
  
  let finalPrice = 0;
  let arrayProducts = [];
  if (products.length > 0) {
    arrayProducts = products.map((product) => product.item.price * product.quantity)
    finalPrice = arrayProducts.reduce((x, y) => x + y);
  }

  return (

    <div>

      <h1>Items en carro: {products.length}</h1>
      <div>
        {products.map((product) => {
          return (
            <div>


              <Fragment  >
                <div key={product.item.index}>
                  <h1>{product.item.name}</h1>

                  <p>Precio por unidad: $ {product.item.price}</p>
                  <p>cantidad agregada: {product.quantity}</p>
                  <p className="bold">
                    Valor total: $
                    {product.item.price * product.quantity}
                  </p>
                  <button onClick={() => removeItem(product.id)}>Quitar</button>
                </div>




              </Fragment>

            </div>
          );

        })}
        <h1>Precio final: ${finalPrice} </h1>
      </div>
      <button>Finalizar compra</button>
      <button onClick={clearCart}>Limpiar carro</button>
    </div>

  )
}

export default Cart