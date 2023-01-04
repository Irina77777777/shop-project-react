import './CartHeader.css'
import productsArray from 'utils/productsArray'
type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart
}: Props) => {
    return (
        <div>
            {
                Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsArray[parseInt(productId) - 1].title}
                        {productId}:{productsInCart[parseInt(productId)]}
                </div>
            ))
          }
        </div>
    )
}
export default CartHeader
