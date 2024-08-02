import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";


function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  // Every time an update happens, we invoke useEffect to calc totals
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return <main>
    <Modal />
    <Navbar />
    <CartContainer />
  </main>
}
export default App;
