import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Main = ({ addProductToCart }: Props) => {
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
              <Route path="cart" element={<CartPage />} />
          </Routes>
          
      </Container>
  )
}
export default Main