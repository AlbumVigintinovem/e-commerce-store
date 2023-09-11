import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import './ProductItem.css';
import { cartActions } from '../../store/cart-slice';
import toast from 'react-hot-toast';
import image from '../../book.png'

const ProductItem = (props) => {
    const { name, price, description, id, star, category } = props;

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        toast.success(name + " added to cart");
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            description,
            star,
            category
        }))
    }

    return (
        <li className={classes.item}>
            <Card>
                <img src={image} />
                <header>
                    <h3>{name}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <p>{category}</p>
                <span class={star >= 1 ? "fa fa-star checked" : "fa fa-star"} ></span>
                <span class={star >= 2 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span class={star >= 3 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span class={star >= 4 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span class={star >= 5 ? "fa fa-star checked" : "fa fa-star"}></span>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
