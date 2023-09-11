import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useState } from 'react';


const Products = (props) => {

    const [sortBy, setSortBy] = useState();
    const dummy = useSelector(state => state.products.DUMMY_PRODUCTS);

    const filter = useSelector(state => state.filter.filteredData);
    const isFiltered = useSelector(state => state.filter.isFiltered);



    return (
        <section className={classes.products}>
            <div className='row d-flex  justify-content-end'>
                <div className='col-md-3 d-flex'>
                    <select
                        class="form-select"
                        id='select-category'
                        aria-label="Default select example"
                        onChange={(e) => setSortBy(e.target.value)}>
                        <option selected>Sort</option>
                        <option value="nameAsc">A-Z</option>
                        <option value="nameDesc">Z-A</option>
                        <option value="priceDesc">Price Max-Min</option>
                        <option value="priceAsc">Price Min-Max</option>
                    </select>
                </div>
            </div>

            <ul>


                <div className='row'>
                    {isFiltered === 0 ? dummy.filter(item => item).sort((a, b) => {
                        if (sortBy && sortBy === 'priceAsc') {
                            return a.price - b.price;
                        } else if (sortBy && sortBy === 'priceDesc') {
                            return b.price - a.price;
                        } else if (sortBy && sortBy === 'nameAsc') {
                            return a.name.localeCompare(b.name);
                        } else if (sortBy && sortBy === 'nameDesc') {
                            return b.name.localeCompare(a.name);
                        } else {
                            return; // Sıralama belirtilmemişse değişiklik yapma
                        }
                    }).map(item => <ProductItem key={item.id} name={item.name} price={item.price} description={item.description} id={item.id} star={item.star} category={item.category} />) :
                        dummy.filter(item => {
                            if (filter.searchTerm && !item.name.toLowerCase().includes(filter.searchTerm)) {
                                return false;
                            }
                            if (filter.category && item.category !== filter.category) {
                                return false;
                            }
                            if (filter.star && item.star < filter.star) {
                                return false;
                            }
                            if (filter.minPrice && item.price < filter.minPrice) {
                                return false;
                            }
                            if (filter.maxPrice && item.price > filter.maxPrice) {
                                return false;
                            }
                            return true;
                        }).sort((a, b) => {
                            if (sortBy === 'priceAsc') {
                                return a.price - b.price;
                            } else if (sortBy === 'priceDesc') {
                                return b.price - a.price;
                            } else if (sortBy === 'nameAsc') {
                                return a.name.localeCompare(b.name);
                            } else if (sortBy === 'nameDesc') {
                                return b.name.localeCompare(a.name);
                            } else {
                                return 0; // Sıralama belirtilmemişse değişiklik yapma
                            }
                        }).map(item => (
                            <ProductItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                id={item.id}
                                star={item.star}
                                category={item.category}
                            />
                        ))}
                </div>
            </ul>

        </section>
    );
};

export default Products;
