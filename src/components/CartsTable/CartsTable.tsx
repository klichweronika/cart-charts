  import { useEffect, useContext } from 'react';
  import Context from '../../context/Context';
  import styles from './CartsTable.module.scss';
  import CartDetails from '../CartDetails/CartDetails';
  import { API_BASE_URL } from '../../common/api/CartsApi';

  
  export default function CartTable() {
    const {
      setSelectedCart,
      carts,
      setCarts,
      cartDetailsOpen,
      setCartDetailsOpen,
    } = useContext(Context);
  
    useEffect(() => {
        fetch(`${API_BASE_URL}/carts`)
          .then((response) => response.json())
          .then(({ carts: dataCarts }) => setCarts(dataCarts))
          .catch((error) => console.error(error));
      }, [setCarts]);
  
      const handleCartClick = (cart: any) => {
        setCartDetailsOpen(true);
        setSelectedCart(cart);
      };
  
    return (
      <>
        <div className={styles.cartsTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Products amount</th>
                <th>Products quantity</th>
                <th>Price</th>
                <th>Total discount</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id} onClick={() => handleCartClick(cart)}>
                  <td>{cart.id}</td>
                  <td>{cart.userId}</td>
                  <td>{cart.totalProducts}</td>
                  <td>{cart.totalQuantity}</td>
                  <td>{cart.total}</td>
                  <td>{cart.discountedTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cartDetailsOpen && <CartDetails />}
      </>
    );
  }