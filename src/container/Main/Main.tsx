import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from "pages/AboutPage/AboutPage"
import PaymentPage from "pages/PaymentPage/PaymentPage"
import ShippingPage from "pages/ShippingPage/ShippingPage"
import productsArray, { ProductProps} from "utils/productsArray"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
        
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}


const Main = ({ addProductToCart , productsInCart}: Props) => {
  return (
      <Container
          maxWidth="lg"
          sx={{
              padding: '50px 0',
          }}
          component="main"
      >
          <Routes>
              <Route
                  path="/"
                  element={<Home addProductToCart={addProductToCart} />}
              />
              <Route path="cart" element={<CartPage  productsInCart={productsInCart}/>} />
              <Route path="about" element={<AboutPage />} />
              <Route path="payment" element={<PaymentPage/>} />
              <Route path="shipping" element={<ShippingPage />} />
          </Routes>

      </Container>
  )
}
export default Main