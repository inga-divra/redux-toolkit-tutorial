import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  // Every time an update happens, we invoke useEffect to calc totals
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  //Fetch cart items once when app loads
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
}
export default App;
