import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}
  
const ProductsListItem = ({ title, desc, type, capacity, price,
    image, addProductToCart,
 }: Props ) => {
    const [count, setCount] = useState<number>(1)
   
    const onIncrementClick = () => {
        setCount ((prevState: number) => prevState + 1)
    }
     const onDecrementClick = () => {
         setCount((prevState: number) => prevState - 1)
     }
     

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{desc}</div>
                <div className="product-features">
                    <span> Type: </span> {type}
                </div>
                <div className="product-features">
                    <span> Capacity: </span> {capacity}
                </div>
                <div className="product-price">
                    <span>Prise:</span> {price}
                </div>

                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(count, price)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
