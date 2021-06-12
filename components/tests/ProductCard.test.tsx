import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../ProductCard';
jest.mock('@react-navigation/native');

const product = {
  id: 1,
  colour: 'Black',
  name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
  price: 10,
  img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <ProductCard
        id={product.id}
        colour={product.colour}
        name={product.name}
        price={product.price}
        img={product.img}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
