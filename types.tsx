/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Products: undefined;
  Basket: undefined;
};

export type SideDrawerParamList = {
  Products: undefined;
  Basket: undefined;
};

export type MainCategoryProps = {
  title: string;
  image: string;
  categories: {
    name: string;
    categories: string[];
  }[];
};

export type ProductsParamList = {
  MainCategoriesScreen: undefined;
  SubCategoriesScreen: undefined;
  ProductScreen: undefined;
  ProductsScreen: undefined;
};

export type BasketParamList = {
  BasketScreen: undefined;
};

export type FetchedCategoryData = [
  {
    name: string;
    img: string;
    children: [{ name: string; categories: [string] }];
  },
];

export type ProductsDataType = [
  {
    id: number;
    colour: string;
    price: number;
    img: string;
    name: string;
  },
];

export type ProductDataType = {
  id: number;
  colour: string;
  price: number;
  img: string;
  name: string;
};
