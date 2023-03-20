import './App.scss';
import Header from './components/Header/Header';
import CartList from './components/CartsTable/CartsTable';
import ContextProvider from './context/ContextProvider'
import Toast from './components/Toast/Toast';

export default function App() {
  return (
    <>
        <ContextProvider>
          <Header />
          <CartList />
        </ContextProvider>
      <Toast/>
    </>
  )
}


