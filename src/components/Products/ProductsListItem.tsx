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
import { useAppSelector } from 'redux/hooks'

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
    //  isLiked?: boolean
    // toggleLikeState: (id: number) => void
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
    // isLiked = false,
    // toggleLikeState,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

const isLiked = useAppSelector((state) => state.likeProducts[id])

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                  //  onClick={() => toggleLikeState(id) }
                >       
                    {/* {productsLikeState[id] */}
                         { isLiked ? (
                        <FavoriteIcon />
                    ) : (
                        <FavoriteBorderIcon />
                    )}

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
//export const { toggleLikeState } = likeSlice.actions
export default ProductsListItem
