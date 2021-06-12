import { Store } from 'pullstate';

export const MyBasket = new Store({
  basket: [],
  basketItems: [],
  sum: 0,
});

export const deleteFromBasket = (productId) => {
  MyBasket.update((s) => {
    const newStore = s;
    const removedItemIndex = newStore.basket.findIndex((item) => item.id === productId);
    newStore.basket.splice(removedItemIndex, 1);
    newStore.sum = newSumBasketHandler(newStore.basket);
    newStore.basketItems = newBasketItemSetArrayHandler(newStore.basket);
    return newStore;
  });
};

export const addToBasket = (product) => {
  MyBasket.update((s) => {
    const newStore = s;
    newStore.basket.push(product);
    newStore.sum = newSumBasketHandler(newStore.basket);
    newStore.basketItems = newBasketItemSetArrayHandler(newStore.basket);
    return newStore;
  });
};

const newBasketItemSetArrayHandler = (basket) =>
  basket.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id && p.name === product.name),
  );

const newSumBasketHandler = (basket) =>
  basket.length > 0 ? basket.reduce((sum, { price }) => sum + price, 0) : 0;
