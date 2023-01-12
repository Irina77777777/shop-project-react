import { Card, CardContent, Grid, Button, TextField } from '@mui/material'
import { ProductProps } from "utils/ProductsArray"
import './CartProductsListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'


type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartProductsListItemExtended = ({productCount, product, removeProductFromCart, changeProductQuantity,}: Props) => {
  return (
      <Grid item xs={12} sm={4}>
          <Card>
              <CardContent>
                  <div className="cart-img">
                      <img src={product.image} alt="" />
                  </div>
                  <div>{product.title}</div>
                  <p>Price for one item:{product.price}</p>
                  <p>Count: {productCount}</p>
                  <Quantity
                      count={productCount}
                      onDecrementClick={() =>
                          changeProductQuantity(product.id, productCount - 1)
                      }
                      onIncrementClick={() =>
                          changeProductQuantity(product.id, productCount + 1)
                      }
                  />
                  <br />
                  <Button
                      variant="outlined"
                      onClick={() => removeProductFromCart(product.id)}
                  >
                      <DeleteIcon />
                  </Button>
              </CardContent>
          </Card>
      </Grid>
  )
}
export default CartProductsListItemExtended