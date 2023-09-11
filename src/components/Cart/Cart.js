import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const items = useSelector(state => state.cart.items);
    const subTotal = useSelector(state => state.cart.subTotal);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <div className={classes.floatCart} >
            <Card className={classes.cart}>
                <h2>Your Shopping Cart</h2>
                <div style={{ maxHeight: 400, overflow: "scroll" }} >
                    <ul>
                        {items.map(item => <CartItem key={item.id} item={{ name: item.name, quantity: item.quantity, price: item.price, total: item.totalPrice, id: item.id }} />)}
                    </ul>
                </div>
                <hr />
                {totalQuantity > 0 ? <h3>SUBTOTAL: ${subTotal.toFixed(2)} </h3> : null}
            </Card>
        </div>
    );
};

export default Cart;
