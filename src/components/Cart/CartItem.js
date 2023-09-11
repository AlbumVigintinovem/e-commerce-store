import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import image from '../../book.png'

const CartItem = (props) => {
    const { name, quantity, total, price, id } = props.item;

    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            name,
            quantity,
            total,
            price,
            id
        }));
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    }


    return (
        <li className={classes.item}>
            <img src={image} width={40} height={40} />
            <header>
                <h2>{name}</h2>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler} >-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
