import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/ProductsArray'
import { render } from '@testing-library/react'

type Props = {}

{
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
                        <Grid item xs={12} sm={6} md={4}></Grid>
                        <Grid item> = productsArray.map(item =>
                            {
                                <>
                                    props.title = `{'title'}`,
                                    props.desc = `{'desc'}`,
                                    props.type = `{"type"}`,
                                    props.capacity = `{"capacity"}`,
                                    props.price = `{'price'}` 
                </>
               } 
                </Grid> ) </Grid>
            </>
        )
    }
}

// const ProductsList = (props: Props) => {
//     return (
//         <>
//             <Grid
//                 container
//                 direction="row"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 spacing={4}
//             >
//                 <Grid item xs={12} sm={6} md={4}>
//                     <ProductsListItem
//                         title="iPhone X"
//                         desc="This is iPhone X"
//                         type="phone"
//                         capacity="64"
//                         price={500}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <ProductsListItem
//                         title="iPhone 14 Pro"
//                         desc="This is iPhone 14 Pro"
//                         type="phone"
//                         capacity="128"
//                         price={1500}
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <ProductsListItem
//                         title="iPhone 12"
//                         desc="This is iPhone 12"
//                         type="phone"
//                         capacity="512"
//                         price={2000}
//                     />
//                 </Grid>
//             </Grid>
//         </>
//     )
// }

export default ProductsList