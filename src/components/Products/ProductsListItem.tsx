import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <div className="product-title">iPhone X</div>
                <div className="product-dec">This is iPhone X</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-price">500$</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
