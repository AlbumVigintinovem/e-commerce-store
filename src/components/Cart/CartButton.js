import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import { MdShoppingBasket, MdOutlineFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import toast from 'react-hot-toast';

const CartButton = (props) => {

    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity)

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <>
            <button className={classes.button}  >
                <span><MdPersonOutline size={24} /> </span>
            </button>
            <button className={classes.button} onClick={toggleCartHandler} >
                <span><MdShoppingBasket size={24} /> </span>
                {cartQuantity === 0 ? null : <span className={classes.badge}> {cartQuantity} </span>}
            </button><button className={classes.button}  >
                <span><MdOutlineFavoriteBorder size={24} /> </span>
            </button>
        </>
    );
};

export default CartButton;
