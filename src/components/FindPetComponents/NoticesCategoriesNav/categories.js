import { nanoid } from 'nanoid';

 const publicCategories = [
  {
    id: nanoid(),
    to: '/notices/sell',
    text: 'sell',
  },
  {
    id: nanoid(),
    to: '/notices/lost-found',
    text: 'lost/found',
  },
  {
    id: nanoid(),
    to: '/notices/in-good-hands',
    text: 'in good hands',
  },
];

 const userCategories = [
  {
    id: nanoid(),
    to: '/notices/favorite',
    text: 'favorite ads',
  },
  {
    id: nanoid(),
    to: '/notices/my-ads',
    text: 'my ads',
  },
];
const categories = { publicCategories, userCategories };

export default categories;