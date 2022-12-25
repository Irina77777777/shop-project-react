import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    prise: number
}

const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant='outlined'>
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-desc">{props.desc}</div>
                <div className="product-features">
                    <span> Type: </span> {props.type}
                </div>
                <div className="product-features">
                    <span> Capacity: </span> {props.capacity}
                </div>
                <div className="product-price">
                    <span>Prise:</span> {props.prise} </div>
            </CardContent>
            <CardActions className='btns-wrap'>
                <Button variant='outlined'>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
