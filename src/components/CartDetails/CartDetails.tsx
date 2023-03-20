import styles from './CartDetails.module.scss';
import { useContext } from 'react';
import Context from '../../context/Context';
import Graph from '../CartsChart/CartsChart';

export default function CartDetails() {
  const { selectedCart, setSelectedCart, cartDetailsOpen, setCartDetailsOpen, carts, setCarts } = useContext(Context);

  const handleRemove = () => {
    setCartDetailsOpen(!cartDetailsOpen);
    setCarts(carts.filter((cart) => cart.id !== selectedCart?.id));
    setSelectedCart(null);
  };

  const handleCartInfo = () => {
    setCartDetailsOpen(!cartDetailsOpen);
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