import { Typography } from "@mui/material"
import CartTotal from "components/CartTotal/CartTotal"
import CartProductsList from "components/CartProductsList/CartProductsList"
import CartProductsListItemExtended from "components/CartProductsList/CartProductsListItemExtended"

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartPage = ({
    productsInCart,
     } : Props ) => {
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
          <CartProductsList productsInCart={productsInCart}
           CartItem={CartProductsListItemExtended}  
        />
         <CartTotal productsInCart={productsInCart} />
      </div>
  )
}
export default CartPage