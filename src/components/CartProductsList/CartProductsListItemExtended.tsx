import { Card, CardContent, Grid, Button,} from '@mui/material'
import { ProductProps } from "utils/ProductsArray"
import './CartProductsListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
}



const CartProductsListItemExtended = ({productCount, product, removeProductFromCart}: Props) => {
  
     const [count, setCount] = useState<number>(1)
   const onIncrementClick = () => {
       setCount((prevState: number) => prevState + 1)
   }
   const onDecrementClick = () => {
       setCount((prevState: number) => prevState - 1)
   }
  
  
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item:{product.price}</p>
                    <p>Count: {count}</p>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    
                    {/* <p>Count2: {count}</p> */}
                    <Button
                        variant="outlined"
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended