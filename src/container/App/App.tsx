import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'


type ProductsInCart={
    [id: number]: number
}

const App = () => {
   

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 1,
        3: 3,
        4: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
        ...prevState,
        [id]: prevState[id] + count,
    }))
}

    
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 1)}>add to car</button>
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
    }
export default App
