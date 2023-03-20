import styles from './CartDetails.module.scss';
import { useContext } from 'react';
import Context from '../../context/Context';
import Graph from '../CartsChart/CartsChart';

export default function CartDetails() {
  const { selectedCart, setSelectedCart, cartInfoVisible, setCartInfoVisible, carts, setCarts } = useContext(Context);

  const handleRemove = () => {
    setCartInfoVisible(!cartInfoVisible);
    setCarts(carts.filter((cart) => cart.id !== selectedCart?.id));
    setSelectedCart(null);
  };

  const handleCartInfo = () => {
    setCartInfoVisible(!cartInfoVisible);
    setSelectedCart(null);
  };

  return (
    <div className={styles.cartDetails}>
      <div className={styles.cartDetails__header}>
        <h3>Cart ID: {selectedCart?.id}</h3>
        <button onClick={handleCartInfo}>X</button>
      </div>
      <Graph />
      <div className={styles.cartDetails__delete}>
        <button onClick={handleRemove}>Delete cart</button>
      </div>
    </div>
  );
}