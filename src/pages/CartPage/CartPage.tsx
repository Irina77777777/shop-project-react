import { Typography } from "@mui/material"
import CartTotal from "components/CartTotal/CartTotal"
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}
const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray) } : Props ) => {
  return (
      <div>
          <Typography
              variant="h4"
              component="h1"
              sx={{
                  marginBottom: '30px',
              }}
          >
              {' '}
              Cart
          </Typography>{' '}
          <div>
              {Object.keys(productsInCart).map((productId) => (
                  <div key={productId}>
                      {productsObject[parseInt(productId)].title} : {'  '}
                      {productsInCart[parseInt(productId)]}
                  </div>
              ))}
          </div>
         <CartTotal productsInCart={productsInCart} />
      </div>
  )
}
export default CartPage