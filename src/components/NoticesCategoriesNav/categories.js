import {nanoid} from 'nanoid';

const categories = [

    {
        id: nanoid(),
        to: '/notices/sell',
        text: "sell",
    },
    {
        id: nanoid(),
        to: '/notices/lost-found',
        text: "lost/found",
    },
    {
        id: nanoid(),
        to: '/notices/for-free',
        text: "in good hands"
    }
];

export default categories

