import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/ProductsArray'
import CartProductsListItem from './CartProductsListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?:any
}
const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductsListItem, }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                     key={productId}
                    product={productsObject[parseInt(productId)]}
                   productCount= {productsInCart[parseInt(productId)]}
                />
                   
                
            ))}
        </div>
    )
}
export default CartProductsList
