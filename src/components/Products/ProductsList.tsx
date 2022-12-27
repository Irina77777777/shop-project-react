import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'


type Props = {}

type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    (
                        { title, desc, type, capacity, price }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}

                {/*               
                    <ProductsListItem
                        title="iPhone X"
                        desc="This is iPhone X"
                        type="phone"
                        capacity="64"
                        price={500}
                    />
                
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        desc="This is iPhone 14 Pro"
                        type="phone"
                        capacity="128"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12"
                        desc="This is iPhone 12"
                        type="phone"
                        capacity="512"
                        price={2000}
                    />
                </Grid> */}
            </Grid>
        </>
    )

}

export default ProductsList