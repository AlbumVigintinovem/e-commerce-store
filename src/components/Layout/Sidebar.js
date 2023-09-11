import React, { useState } from 'react'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '../../store/filter-slice';

const Sidebar = () => {

    const [filter, setFilter] = useState({
        searchTerm: "", category: "", star: "", minPrice: "", maxPrice: ""
    });
    const dummy = useSelector(state => state.products.DUMMY_PRODUCTS);

    const dispatch = useDispatch();

    const filterDataHandler = () => {
        dispatch(filterActions.filterData(filter));
    }
    const resetFilter = () => {
        dispatch(filterActions.isFilteredHandler());
        // Reset Text Inputs
        setFilter({
            searchTerm: "", category: "", star: "", minPrice: "", maxPrice: ""
        });
        // Reset Radio Button
        let ele = document.getElementsByName("rating");
        for (var i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
        // Reset Select Input
        var options = document.querySelectorAll('#select-category option');
        for (var i = 0; i < options.length; i++) {
            options[i].selected = options[i].defaultSelected;
        }

    }




    return (
        <div className='filter-section'>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne" >
                        <button class={window.innerWidth > 767 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>Filter</h3>
                        </button>
                    </h2>
                    <div id="collapseOne" class={window.innerWidth > 767 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div>
                                <div className='row d-flex align-items-center' >
                                    <div className='col-md-4'>Search: </div>
                                    <div className='col-md-8'> <input type="text" class="form-control" placeholder="Search.." value={filter.searchTerm} onChange={(e) => setFilter({ ...filter, searchTerm: e.target.value })} /></div>
                                </div>
                            </div>
                            <hr />
                            <div className='row d-flex align-items-center' >
                                <div className='col-md-4'>Price: </div>
                                <div className='col-md-4'> <input type="number" class="form-control" placeholder="Min" value={filter.minPrice} onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })} /></div>
                                <div className='col-md-4'> <input type="number" class="form-control" placeholder="Max" value={filter.maxPrice} onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })} /> </div>
                            </div>
                            <hr />
                            <div>
                                <div className='row d-flex align-items-center' >
                                    <div className='col-md-4'>Category: </div>
                                    <div className='col-md-8'> <select class="form-select" id='select-category' aria-label="Default select example" onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
                                        <option selected>Select Category</option>
                                        <option value="LOTR">LOTR</option>
                                        <option value="Harry Potter">Harry Potter</option>
                                        <option value="Sherlock Holmes">Sherlock Holmes</option>
                                    </select> </div>
                                </div>
                            </div>
                            <hr />

                            <div>
                                <div className='row d-flex align-items-center' >
                                    <div className='col-md-4'>Stars: </div>
                                    <div className='col-md-8'>  <div class="rating">
                                        <input type="radio" id="star5" name="rating" value="5" onChange={(e) => setFilter({ ...filter, star: parseInt(e.target.value) })} />
                                        <label class="star" for="star5" title="Awesome" aria-hidden="true"></label>
                                        <input type="radio" id="star4" name="rating" value="4" onChange={(e) => setFilter({ ...filter, star: parseInt(e.target.value) })} />
                                        <label class="star" for="star4" title="Great" aria-hidden="true"></label>
                                        <input type="radio" id="star3" name="rating" value="3" onChange={(e) => setFilter({ ...filter, star: parseInt(e.target.value) })} />
                                        <label class="star" for="star3" title="Very good" aria-hidden="true"></label>
                                        <input type="radio" id="star2" name="rating" value="2" onChange={(e) => setFilter({ ...filter, star: parseInt(e.target.value) })} />
                                        <label class="star" for="star2" title="Good" aria-hidden="true"></label>
                                        <input type="radio" id="star1" name="rating" value="1" onChange={(e) => setFilter({ ...filter, star: parseInt(e.target.value) })} />
                                        <label class="star" for="star1" title="Bad" aria-hidden="true"></label>
                                    </div> </div>
                                </div>
                                <div className='row mt-3' >
                                    <button className='btn btn-primary' onClick={filterDataHandler} > Apply</button>
                                    <button className='btn btn-danger mt-3' onClick={resetFilter} > Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar