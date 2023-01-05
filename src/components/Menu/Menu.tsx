import MenuItem from './MenuItem'
// import { NavLink } from 'react-router-dom'
// import { Button } from '@mui/material'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            {/* <Button color="inherit">
                <NavLink to={'/'}>Home</NavLink>
            </Button>
            <Button color="inherit"> Products</Button>
            <Button color="inherit"> Shipping</Button>
            <Button color="inherit"> Payment</Button>
            <Button color="inherit">
            <NavLink to={'/cart'}>Cart</NavLink>
            </Button> */}
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}

export default Menu
