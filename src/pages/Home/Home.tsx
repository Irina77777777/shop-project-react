import { Typography } from "@mui/material"
import ProductsList from "components/Products/ProductsList"
import Reviews from "components/Reviews/Reviews"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLikeState: { [id: number]: boolean }
    changeLikeState: (id: number, isLiked: boolean) => void
}

const Home = ({
    addProductToCart,
    productsLikeState,
    changeLikeState,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products{''}
            </Typography>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLikeState={productsLikeState}
                changeLikeState={changeLikeState}
            />
            <Reviews />
        </>
    )
}
export default Home