import { Fragment, React, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/itemListContainer';
import { useState } from 'react';


const Cart = () => {

  const { products, total, clearCart, removeItem, compra, formulario } = useContext(CartContext);

  console.log("Productos en carro", products);
  console.log("Cantidad de productos en carro: ", total);

  let finalPrice = 0;
  let arrayProducts = [];
  if (products.length > 0) {
    arrayProducts = products.map((product) => product.item.price * product.quantity)
    finalPrice = arrayProducts.reduce((x, y) => x + y);
  }

  console.log("El precio final es de: $", finalPrice)

  const [formValues, setFormValues] = useState({})

  return (
    //Si no hay productos renderiza este mensaje "agresivo" caso contrario renderiza el carro
    <div>
      {
        products.length === 0 && (
          <div>

            <h1>Tu carro está vacío</h1>

            <h2><Link to="/" element={<ItemListContainer />}>¡Comprá cosas!¡Gastá dinero!</Link></h2>

          </div>

        )
      }

      {
        products.length >= 1 && (
          <div>
            <h1>Items en carro: {products.length}</h1>
            <div>
              {products.map((product) => {
                return (
                  <div key={product.id}>


                    <Fragment  >
                      <div >
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
          </div>
        )
      }

      <button onClick={formulario}>Finalizar compra</button>

      {
        compra === true &&
        products.length >= 1 &&
        (
          <div>
            <h1>Datos de Compra</h1>
            <form className='formularioCarro' action="">
              <input type="text" name='name' placeholder='Nombre' required />
              <input type="text" name='lastname' placeholder='Apellido' required />
              <input type="number" name='cellphone' placeholder='Teléfono' required />
              <input type="email" name='email' placeholder='Email' required />
              <input type="text" name='address' placeholder='Dirección' required />
              <input type="submit" value='Finalizar' />
            </form>

          </div>
        )
      }
      <button onClick={clearCart}>Limpiar carro</button>
    </div>

  )
}

export default Cart