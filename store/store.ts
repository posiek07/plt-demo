import { Store } from 'pullstate';

export const MyBasket = new Store({
  basket: [],
  sum: 0,
});

export const deleteFromBasket = (productId) => {
  MyBasket.update((s) => {
    const newBasket = s;
    const removedItemIndex = newBasket.basket.findIndex((item) => item.id === productId);
    newBasket.basket.splice(removedItemIndex, 1);
    newBasket.sum =
      newBasket.basket.length > 0 ? newBasket.basket.reduce((sum, { price }) => sum + price, 0) : 0;
    return newBasket;
  });
};

export const addToBasket = (product) => {
  MyBasket.update((s) => {
    const newBasket = s;
    newBasket.basket.push(product);
    newBasket.sum =
      newBasket.basket.length > 0 ? newBasket.basket.reduce((sum, { price }) => sum + price, 0) : 0;
    return newBasket;
  });
};
