import {
    Button,
    Card,
    CardActions,
    CardContent,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
    // isLiked?: boolean
    productsLikeState: { [id: number]: boolean }
    changeLikeState: (id: number, isLiked: boolean) => void
}
  
const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    //isLiked = false,
    productsLikeState,
    changeLikeState,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const changLikeState = () => {
        setCount((prevState: number) => prevState + 1)
        if (count % 2 === 0) {
           // productsLikeState[id] = false 
            alert(count)
            productsLikeState[id] = true
             productsLikeState[id] ? <FavoriteIcon /> : <FavoriteBorderIcon />
        } else {
            alert(count)
            productsLikeState[id] = false 
            productsLikeState[id] ? <FavoriteIcon /> : <FavoriteBorderIcon /> 
        }

    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                   onClick={changLikeState} 
                    //{ isLiked = false}}
                >

                    {productsLikeState[id] ? (
                        <FavoriteIcon />
                    ) : (
                        <FavoriteBorderIcon />
                    )}


                    {/* {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />} */}
                </Button>
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

                <Quantity
                    count={count}
                    onIncrementClick={onIncrementClick}
                    onDecrementClick={onDecrementClick}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
