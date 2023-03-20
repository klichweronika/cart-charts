import { useContext, useState } from 'react';
import styles from '../Header/Header.module.scss';
import Context from '../../context/Context';
import { API_BASE_URL } from '../../common/api/CartsApi';
import { toastSuccess, toastError } from '../../components/Toast/Toast';

const Header = () => {
  const [value, setValue] = useState(1);
  const { carts, setCarts } = useContext(Context);

  const fetchData = async () => {
    const response = await fetch(`${API_BASE_URL}/carts/${value}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cart data');
    }
    const data = await response.json();
    setCarts([...carts, data]);
  };

  const handleAddCart = async () => {
    if (value > 20) {
      toastError('Invalid ID');
    } else if (!carts.some((cart) => cart.id === value)) {
      try {
        await fetchData();
        if (carts[carts.length - 1]) {
          toastSuccess('Successfully added new cart!');
        } else {
          toastError('Failed to fetch cart data');
        }
      } catch (error: any) {
        toastError(error.message);
      }
    } else {
      toastError('Cart is already in the list');
    }
  };

  return (
    <div className={styles.header}>
      <span>If your cart is not in the list, you can choose one from 1-20!</span>
      <div className={styles.header__selector}>
        <input
        value={value}
          type="number"
          inputMode="numeric"
          min="1"
          max="20"
          step="1"
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleAddCart}>Add cart</button>
    </div>
  );
};

export default Header;