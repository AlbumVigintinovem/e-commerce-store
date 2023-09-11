import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        DUMMY_PRODUCTS: [{
            id: 'p1',
            name: 'The Lord Of The Rings: The Fellowship Of The Ring',
            description: 'The Fellowship Of The Ring',
            price: 209.99,
            star: 5,
            category: "LOTR"
        },
        {
            id: 'p2',
            name: 'The Lord Of The Rings: The Two Towers',
            description: 'The Two Towers',
            price: 199.99,
            star: 3,
            category: "LOTR"
        },
        {
            id: 'p3',
            name: 'The Lord Of The Rings: The Return of the King',
            description: 'The Return of the King',
            price: 219.99,
            star: 5,
            category: "LOTR"
        },
        {
            id: 'p4',
            name: "Harry Potter and the Philosopher's Stone",
            description: "Philosopher's Stone",
            price: 159.99,
            star: 5,
            category: "Harry Potter"
        },
        {
            id: 'p5',
            name: "Harry Potter and the Chamber of Secrets",
            description: "Chamber of Secrets",
            price: 39.99,
            star: 1,
            category: "Harry Potter"
        },
        {
            id: 'p6',
            name: "Harry Potter and the Prisoner of Azkaban",
            description: "Prisoner of Azkaban",
            price: 159.99,
            star: 5,
            category: "Harry Potter"
        },
        {
            id: 'p7',
            name: "Harry Potter and the Goblet of Fire",
            description: "Goblet of Fire",
            price: 259.99,
            star: 5,
            category: "Harry Potter"
        },
        {
            id: 'p8',
            name: "Sherlock Holmes: A Study in Scarlet",
            description: "A Study in Scarlet",
            price: 359.99,
            star: 5,
            category: "Sherlock Holmes"
        }, {
            id: 'p9',
            name: "Sherlock Holmes: The Sign of the Four",
            description: "The Sign of the Four",
            price: 319.99,
            star: 5,
            category: "Sherlock Holmes"
        },
        {
            id: 'p10',
            name: "Sherlock Holmes: The Hound of the Baskervilles",
            description: "The Hound of the Baskervilles",
            price: 349.99,
            star: 5,
            category: "Sherlock Holmes"
        }
        ]
    },
    reducers: {}
});


export default productSlice;